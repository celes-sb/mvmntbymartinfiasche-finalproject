"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import json
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.db import db
from api.user import User
from .exercises import Exercises
from .programs import Programs
from api.tokenBlockedList import TokenBlockedList
from api.utils import generate_sitemap, APIException
from datetime import datetime

import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

import base64
import os.path
import pickle


from api.extensions import jwt, bcrypt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_jwt_extended import get_jwt

api = Blueprint('api', __name__)

EMAIL = os.environ.get('EMAIL')
PASSWORD = os.environ.get('PASSWORD')

def sendEmail(message, to, subject):
    smtp_address = 'smtp.gmail.com'
    smtp_port = 465 #SSL

    print(message, to, subject)

    messageMime = MIMEMultipart('alternative')
    messageMime['Subject'] = subject
    messageMime['To'] = to
    messageMime['From'] = EMAIL

    html = '''
    <html>
    <body>
    <h1> Hi, ''' + message + ''' </h1>
    </body>
    </html>
    '''

    #crear elementos MIMEtext
    text_mime = MIMEText(message, 'plain')
    #html_mime = MIMEText(html, 'html')

    #adjuntar los MIMEText al MIMEMultipart

    messageMime.attach(text_mime)
    #messageMime.attach(html_mime)

    #conectarnos al puerto 465 de gmail para enviar el correo

    context = ssl.create_default_context()
    emailfrom = EMAIL
    password = PASSWORD
    with smtplib.SMTP_SSL(smtp_address, smtp_port, context=context) as server:
        server.login(emailfrom, password)
        server.sendmail(emailfrom, to, messageMime.as_string())

    return jsonify({"message":"email sent"}), 200


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():
#     password_encrypted = bcrypt.generate_password_hash("123",10).decode("utf-8")
#     response_body = {
#         "message": password_encrypted
#     }

#     return jsonify(response_body), 200

# @api.route('/hola', methods=['POST', 'GET'])
# def handle_hola():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def register_user():
    body = request.get_json()
    email = body["email"]
    name = body["name"]
    lastname = body["lastname"]
    username = body["username"]
    password = body["password"]
    phone = body["phone"]
    country = body["country"]
    gender = body["gender"]
    

    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=400)
    if "email" not in body:
        raise APIException("You need to specify the email", status_code=400)
    if "name" not in body:
        raise APIException("You need to specify the name", status_code=400)
    if "password" not in body:
        raise APIException("You need to specify the password", status_code=400)
    if "lastname" not in body:
        raise APIException("You need to specify the lastname", status_code=400)
    if "username" not in body:
        raise APIException("You need to specify the username", status_code=400)
    if "phone" not in body:
        raise APIException("You need to specify the phone", status_code=400)
    if "country" not in body:
        raise APIException("You need to specify the country", status_code=400)
    if "gender" not in body:
        raise APIException("You need to specify the gender", status_code=400)
    
    user = User.query.filter_by(email=email).first()
    if user is not None:
        raise APIException("Email is already registered", status_code=409)
    
    password_encrypted = bcrypt.generate_password_hash(password,10).decode("utf-8")

    current_date = datetime.utcnow()
    
    new_user = User(email=email, first_name=name, password=password_encrypted, last_name=lastname, username=username, phone=phone, country=country, gender=gender, creation_date=current_date)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg":"User successfully created"}), 201

@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    email_or_username = body["email_or_username"]
    password = body["password"]
    
    if "email_or_username" not in body:
        raise APIException("You need to specify the email or username", status_code=400)

    if "password" not in body:
        raise APIException("You need to specify the password", status_code=400)

    user = User.query.filter((User.email == email_or_username) | (User.username == email_or_username)).first()

    if user is None:
        return jsonify({"message": "Login failed"}), 401

    # Validate the encrypted password
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login failed"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token}), 200

@api.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()["jti"] #Identificador del JWT (es más corto)
    now = datetime.utcnow()

    #identificamos al usuario
    current_user = get_jwt_identity()
    user = User.query.get(current_user)

    tokenBlocked = TokenBlockedList(token=jti , created_at=now, email=user.email)
    db.session.add(tokenBlocked)
    db.session.commit()

    return jsonify({"message":"logout successfully"})

@api.route('/user/<int:id>', methods=['GET'])
def get_specific_user(id):
    user = User.query.get(id)    
  
    return jsonify(user.serialize()), 200

@api.route('/edituser/<int:user_id>', methods=['PUT'])
@jwt_required()
def edit_user(user_id):
    current_user_id = get_jwt_identity()
    if current_user_id != user_id:
        return jsonify({"message": "You can only edit your own user"}), 403

    body = json.loads(request.data)
    user = User.query.filter_by(id=user_id).first()
    if user is  None:
        raise APIException("USER NOT FOUND", status_code=409)
    for key in body:
        for col in user.serialize():
            if key == col and key != "id":
                setattr(user, col, body[key])
    db.session.commit()
    return jsonify({"msg":"User modified correctly"}), 201


@api.route('/correo', methods=['POST'])
def handle_email():
    body = request.get_json()
    message = body["message"]
    to = body ["to"]
    subject = body ["subject"]

    sendEmail(message, to, subject)

    return jsonify({"message":"message sent"}), 200

@api.route('/getuser', methods=['GET'])
def get_user():
    body = request.get_json()
    id = body ["id"] if 'id' in body else None
    email = body ["email"] if 'email' in body else None
    username = body["username"] if 'username' in body else None
    first_name = body["first_name"] if 'first_name' in body else None
    last_name = body["last_name"] if 'last_name' in body else None
    phone = body["phone"] if 'phone' in body else None
    country = body["country"] if 'country' in body else None
    creation_date = body["creation_date"] if 'creation_date' in body else None
    height = body["height"] if 'height' in body else None
    weight = body["weight"] if 'weight' in body else None
    level_training = body["level_training"] if 'level_training' in body else None
    injuries = body["injuries"] if 'injuries' in body else None
    availability = body["availability"] if 'availability' in body else None
    numeric_preference = body["numeric_preference"] if 'numeric_preference' in body else None
    access_gym = body["access_gym"] if 'access_gym' in body else None
    users = User.query
    if id:
        users = users.filter_by(id=id)
    if username:
        users = users.filter_by(username=username)
    if email:
        users = users.filter_by(email=email)
    if first_name:
        users = users.filter_by(first_name=first_name)
    if last_name:
        users = users.filter_by(last_name=last_name)
    if phone:
        users = users.filter_by(phone=phone)
    if country:
        users = users.filter_by(country=country)
    if creation_date:
        users = users.filter_by(creation_date=creation_date)
    if height:
        users = users.filter_by(height=height)
    if weight:
        users = users.filter_by(weight=weight)
    if level_training:
        users = users.filter_by(level_training=level_training)
    if injuries:
        users = users.filter_by(injuries=injuries)
    if availability:
        users = users.filter_by(availability=availability)
    if numeric_preference:
        users = users.filter_by(numeric_preference=numeric_preference)
    if access_gym:
        users = users.filter_by(access_gym=access_gym)
    users = users.all()
    print(users)
    users=list(map(lambda item: item.serialize(), users))
    return jsonify(users)

@api.route('/getexercises', methods=['GET'])
def get_exercises():
    body = request.get_json()
    id = body ["id"] if 'id' in body else None
    name = body ["name"] if 'name' in body else None
    category = body["category"] if 'category' in body else None
    exercise = Exercises.query
    if id:
        exercise = exercise.filter_by(id=id)
    if name:
        exercise = exercise.filter_by(name=name)
    if category:
        exercise = exercise.filter_by(category=category)
    exercise = exercise.all()
    print(exercise)
    exercise=list(map(lambda item: item.serialize(), exercise))
    return jsonify(exercise)

@api.route('/editexercises/<int:exercises_id>', methods=['PUT'])
def edit_exercises(exercises_id):
    body = json.loads(request.data)
    exercise = Exercises.query.filter_by(id=exercises_id).first()
    if exercise is None:
        raise APIException("EXERCISE NOT FOUND", status_code=409)
    for key in body:
        for col in exercise.serialize():
            if key == col and key != "id":
                setattr(exercise, col, body[key])
    db.session.commit()
    return jsonify({"msg": "Exercise modified correctly"}), 201    

@api.route('/newprogram', methods=['POST'])
def register_program():
    body = request.get_json()
    program_name = body["program_name"]
    user_id = body["user_id"]
    day = body["day"]
    category = body["category"]
    exercise_number = body["exercise_number"]
    load = body["load"]
    sets = body["sets"]
    repetitions = body["repetitions"]
    rest_time = body["rest_time"]

    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=400)
    if "program_name" not in body:
        raise APIException("You need to specify the program name", status_code=400)
    if "user_id" not in body:
        raise APIException("You need to specify the user id", status_code=400)
    if "day" not in body:
        raise APIException("You need to specify the day", status_code=400)
    if "category" not in body:
        raise APIException("You need to specify the category", status_code=400)
    if "exercise_number" not in body:
        raise APIException("You need to specify the exercise number", status_code=400)
    if "load" not in body:
        raise APIException("You need to specify the load", status_code=400)
    if "sets" not in body:
        raise APIException("You need to specify the sets", status_code=400)
    if "repetitions" not in body:
        raise APIException("You need to specify the repetitions", status_code=400)
    if "rest_time" not in body:
        raise APIException("You need to specify the rest_time", status_code=400)
    
    program = Programs.query.filter_by(program_name=program_name).first()
    if program is not None:
        raise APIException("Program already exists", status_code=409)
    
    current_date = datetime.utcnow()
    
    new_program = Programs(program_name=program_name, user_id=user_id, day=day, category=category, exercise_number=exercise_number, load=load, sets=sets, repetitions=repetitions, rest_time=rest_time, creation_date=current_date)

    db.session.add(new_program)
    db.session.commit()

    return jsonify({"msg":"Program successfully created"}), 201





@api.route('/getprograms', methods=['GET'])
def get_programs():
    body = request.get_json()
    id = body ["id"] if 'id' in body else None
    day = body ["day"] if 'day' in body else None
    category = body["category"] if 'category' in body else None
    
    Program = Programs.query
    if id:
        Program = Program.filter_by(id=id)
    if day:
        Program = Program.filter_by(day=day)
    if category:
        Program = Program.filter_by(category=category)
    Program = Program.all()
    print(Program)
    Program=list(map(lambda item: item.serialize(), Program))
    return jsonify(Program)


@api.route('/editprograms/<int:programs_id>', methods=['PUT'])
def edit_programs(programs_id):
    body = json.loads(request.data)
    program = Programs.query.filter_by(id=programs_id).first()
    if program is None:
        raise APIException("PROGRAM NOT FOUND", status_code=409)
    for key in body:
        if hasattr(program, key):
            setattr(program, key, body[key])
    db.session.commit()
    return jsonify({"msg": "Program modified correctly"}), 201


