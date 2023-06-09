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
from .nutrition import Nutrition
from .papers import Papers
from .programOrganizer import ProgramOrganizer
from api.tokenBlockedList import TokenBlockedList
from api.utils import generate_sitemap, APIException
from datetime import datetime
from itsdangerous import URLSafeTimedSerializer


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

    
    text_mime = MIMEText(message, 'plain')
   

    messageMime.attach(text_mime)
    

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

    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login failed"}), 401
    
    if user.role == 'admin':
        return jsonify({"message": "You do not have permissions to access this route"}), 403

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token}), 200

@api.route('/admin-login', methods=['POST'])
def admin_login():
    body = request.get_json()
    email_or_username = body.get("email_or_username")
    password = body.get("password")
    
    if not email_or_username or not password:
        raise APIException("You need to specify the email or username and password", status_code=400)

    user = User.query.filter((User.email == email_or_username) | (User.username == email_or_username)).first()

    if user is None or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login failed"}), 401

    
    if user.role != 'admin':
        return jsonify({"message": "You do not have permissions to access this route"}), 403

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token}), 200

@api.route('/change_password/<int:user_id>', methods=['PUT'])
@jwt_required()
def change_password(user_id):
    current_user_id = get_jwt_identity()
    if current_user_id != user_id:
        return jsonify({"message": "You can only change your own password"}), 403

    body = json.loads(request.data)
    user = User.query.filter_by(id=user_id).first()
    if user is None:
        raise APIException("USER NOT FOUND", status_code=409)

    current_password = body.get('current_password')
    new_password = body.get('new_password')

   
    if bcrypt.check_password_hash(user.password, current_password):
        
        user.password = bcrypt.generate_password_hash(new_password).decode('utf-8')
        db.session.commit()
        return jsonify({"msg":"Password updated successfully"}), 200
    else:
        return jsonify({"msg":"Current password is incorrect"}), 401

@api.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()["jti"] 
    now = datetime.utcnow()

    
    current_user = get_jwt_identity()
    user = User.query.get(current_user)

    tokenBlocked = TokenBlockedList(token=jti , created_at=now, email=user.email)
    db.session.add(tokenBlocked)
    db.session.commit()

    return jsonify({"message":"logout successfully"})

@api.route('/admin-logout', methods=['POST'])
@jwt_required()
def admin_logout():
    jti = get_jwt()["jti"] 
    now = datetime.utcnow()

    
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
                # If the key is credit card, store only the last 4 digits and hash them
                if key == 'credit_card':
                    first_twelve = body[key][:12]
                    last_four = body[key][-4:]
                    hashed_first_twelve = bcrypt.generate_password_hash(first_twelve).decode('utf-8')
                    setattr(user, col, hashed_first_twelve + str(last_four))
                else:
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
    id = request.args.get('id')
    email = request.args.get('email')
    username = request.args.get('username')
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')
    phone = request.args.get('phone')
    country = request.args.get('country')
    creation_date = request.args.get('creation_date')
    height = request.args.get('height')
    weight = request.args.get('weight')
    level_training = request.args.get('level_training')
    injuries = request.args.get('injuries')
    availability = request.args.get('availability')
    numeric_preference = request.args.get('numeric_preference')
    access_gym = request.args.get('access_gym')
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


@api.route('/newexercises', methods=['POST'])
def register_exercise():
    body = request.get_json()
    name = body["name"]
    category = body["category"]
    url_youtube = body["url_youtube"]
    description = body["description"]

    if body is None:
        raise APIException("You need to specify the request body as a JSON object", status_code=400)
      
    
    if "name" not in body:
        raise APIException("You need to specify the name", status_code=400)
    if "category" not in body:
        raise APIException("You need to specify the category", status_code=400)
    if "url_youtube" not in body:
        raise APIException("You need to specify the youtube url", status_code=400)
    if "description" not in body:
        raise APIException("You need to specify the description", status_code=400)

    new_exercise = Exercises.query.filter_by(name=name).first()
    if new_exercise is not None:
        raise APIException("Exercise already exists", status_code=409)

    new_exercise = Exercises( name=name, category=category, url_youtube=url_youtube, description=description)

    db.session.add(new_exercise)
    db.session.commit()

    return jsonify({"msg": "Exercise successfully created"}), 201

@api.route('/getexercises', methods=['GET'])
def get_exercises():
    id = request.args.get("id", None)
    name = request.args.get("name", None)
    category = request.args.get("category", None)
    
    exercise = Exercises.query
    if id:
        exercise = exercise.filter_by(id=id)
    if name:
        exercise = exercise.filter_by(name=name)
    if category:
        exercise = exercise.filter_by(category=category)
        
    exercise = exercise.all()
    exercise = list(map(lambda item: item.serialize(), exercise))
    return jsonify(exercise)

@api.route('/getexercises/<int:id>', methods=['GET'])
def get_specific_exercise(id):
    exercise = Exercises.query.get(id)
    if exercise is None:
        return jsonify({'error': 'Exercise not found'}), 404

    return jsonify(exercise.serialize()), 200


@api.route('/deleteexercises', methods=['DELETE'])
def delete_specific_exercise():
    body = request.get_json()   
    exercise_id = body["id"]

    exercise = Exercises.query.get(exercise_id)

    if exercise is None:
        return jsonify({"error": "Exercise not found"}), 404

    db.session.delete(exercise)
    db.session.commit()  
  
    return jsonify({"msg": "Exercise deleted"}), 200 

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
    category = body["category"]

    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=400)
    if "program_name" not in body:
        raise APIException("You need to specify the program name", status_code=400)
    if "user_id" not in body:
        raise APIException("You need to specify the user id", status_code=400)
    if "category" not in body:
        raise APIException("You need to specify the category", status_code=400)
    
    program = Programs.query.filter_by(program_name=program_name).first()
    if program is not None:
        raise APIException("Program already exists", status_code=409)
    
    current_date = datetime.utcnow()
    
    new_program = Programs(program_name=program_name, user_id=user_id, category=category, creation_date=current_date)

    db.session.add(new_program)
    db.session.commit()

    return jsonify({"msg":"Program successfully created"}), 201

@api.route('/getprograms', methods=['GET'])
def get_programs():
    user_id = request.args.get("user_id", None)
    day = request.args.get("day", None)
    category = request.args.get("category", None)
    
    programs = Programs.query
    if user_id:
        programs = programs.filter_by(user_id=user_id)
    if day:
        programs = programs.filter_by(day=day)
    if category:
        programs = programs.filter_by(category=category)
    programs = programs.all()
    programs = list(map(lambda item: item.serialize(), programs))
    return jsonify(programs)

@api.route('/getprograms/<int:id>', methods=['GET'])
def get_specific_program(id):
    program = Programs.query.get(id)
    if program is None:
        return jsonify({'error': 'Program not found'}), 404

    return jsonify(program.serialize()), 200

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

@api.route('/deleteprograms', methods=['DELETE'])
def delete_specific_program():
    body = request.get_json()   
    program_id = body["id"]

    program = Programs.query.get(program_id)

    if program is None:
        return jsonify({"error": "Program not found"}), 404

    program_organizer_items = ProgramOrganizer.query.filter_by(program_id=program_id).all()

    for item in program_organizer_items:
        db.session.delete(item)

    db.session.delete(program)
    db.session.commit()

    return jsonify({"msg": "Exercise deleted"}), 200 

@api.route('/programorganizer', methods=['POST'])
def program_organizer():
    body = request.get_json()

    required_fields = ["program_id", "exercise_id"]
    for field in required_fields:
        if field not in body:
            raise APIException(f"You need to specify the {field}", status_code=400)

    program_id = body["program_id"]
    exercise_id = body["exercise_id"]

    program = Programs.query.get(program_id)
    if not program:
        raise APIException('program not found', status_code=404)

    exercise = Exercises.query.get(exercise_id)
    if not exercise:
        raise APIException('exercise not found', status_code=404)

    organized_program = ProgramOrganizer(program_id=program.id, exercise_id=exercise.id)

    optional_fields = [
        "day", "type",
        "session_1", "weight_1", "repetitions_1", "series_1", "rest_1", "comments_1",
        "session_2", "weight_2", "repetitions_2", "series_2", "rest_2", "comments_2",
        "session_3", "weight_3", "repetitions_3", "series_3", "rest_3", "comments_3",
        "session_4", "weight_4", "repetitions_4", "series_4", "rest_4", "comments_4"
    ]

    for field in optional_fields:
        if field in body:
            setattr(organized_program, field, body[field])

    db.session.add(organized_program)
    db.session.commit()

    return jsonify(organized_program.serialize()), 201


@api.route('/getorganizedprograms/<int:user_id>', methods=['GET'])
def get_organized_programs(user_id):
    programs = Programs.query.filter_by(user_id=user_id).all()
    organized_programs = {}

    for program in programs:
        program_name = program.program_name
        program_id = program.id

        if program_name not in organized_programs:
            organized_programs[program_name] = {}

        
        organized_programs[program_name]["program_id"] = program_id

        program_organizer = ProgramOrganizer.query.filter_by(program_id=program.id).all()

        for po in program_organizer:
            day_key = f"Day {po.day}"

            if day_key not in organized_programs[program_name]:
                organized_programs[program_name][day_key] = {
                    "workout": {},
                    "sessions": {}
                }

            exercise_data = {
                "po_id": po.id,
                "day": po.day,
                "type": po.type,
                "exercise_name": Exercises.query.get(po.exercise_id).name,
                "url_youtube": Exercises.query.get(po.exercise_id).url_youtube,
                "description": Exercises.query.get(po.exercise_id).description,
            }

            if po.type not in organized_programs[program_name][day_key]["workout"]:
                organized_programs[program_name][day_key]["workout"][po.type] = exercise_data

                for session_number in range(1, 5):
                    session_key = f"Session {session_number}"

                    weight = getattr(po, f"weight_{session_number}")
                    repetitions = getattr(po, f"repetitions_{session_number}")
                    series = getattr(po, f"series_{session_number}")

                    if weight is not None and repetitions is not None and series is not None:
                        if session_key not in organized_programs[program_name][day_key]["sessions"]:
                            organized_programs[program_name][day_key]["sessions"][session_key] = []

                        session_data = {
                            "type": po.type,
                            "weight": weight,
                            "repetitions": repetitions,
                            "series": series,
                        }
                        organized_programs[program_name][day_key]["sessions"][session_key].append(session_data)

    return jsonify(organized_programs), 200

@api.route('/programorganizer/<int:program_organizer_id>', methods=['PUT'])
def edit_program_organizer(program_organizer_id):

    body = json.loads(request.data)
    program_organizer = ProgramOrganizer.query.filter_by(id=program_organizer_id).first()
    if program_organizer is  None:
        raise APIException("PROGRAM NOT FOUND", status_code=409)

    
    columns = ProgramOrganizer.__table__.columns.keys()

    for key in body:
        for col in columns:
            if key == col and key != "id":
                setattr(program_organizer, col, body[key])

    db.session.commit()
    return jsonify({"msg": "Program modified correctly"}), 201

@api.route('/programorganizer', methods=['DELETE'])
def remove_program_organizer():
    body = request.get_json()
    id = body["id"]

    program_organizer = ProgramOrganizer.query.get(id)

    if not program_organizer:
        raise APIException('Not found', status_code=404)

    db.session.delete(program_organizer)
    db.session.commit()

    return jsonify({"msg":"Program successfully deleted"}), 200


@api.route('/newnutrition', methods=['POST'])
def create_new_nutrition():
    body = request.get_json()

    if body is None:
        return jsonify({"error": "You need to specify the request body as a JSON object"}), 400

    required_fields = ["name", "date", "weight", "height", "body_fat", "muscle_mass", "water_intake", "calories_intake", "protein_intake"]
    for field in required_fields:
        if field not in body:
            return jsonify({"error": f"You need to specify the '{field}' field"}), 400

    name = body["name"]
    date = body["date"]
    weight = body["weight"]
    height = body["height"]
    body_fat = body["body_fat"]
    muscle_mass = body["muscle_mass"]
    water_intake = body["water_intake"]
    calories_intake = body["calories_intake"]
    protein_intake = body["protein_intake"]

    
    new_nutrition = Nutrition(
        name=name,
        date=date,
        weight=weight,
        height=height,
        body_fat=body_fat,
        muscle_mass=muscle_mass,
        water_intake=water_intake,
        calories_intake=calories_intake,
        protein_intake=protein_intake
    )

    
    db.session.add(new_nutrition)
    db.session.commit()

    return jsonify({"msg": "Nutrition created successfully"}), 201

@api.route('/deletenutrition', methods=['DELETE'])
def delete_specific_nutrition():
    body = request.get_json()   
    nutrition_id = body["id"]

    nutrition = Nutrition.query.get(nutrition_id)

    if nutrition is None:
        return jsonify({"error": "Nutrition not found"}), 404

    db.session.delete(nutrition)
    db.session.commit()  
  
    return jsonify({"msg": "Nutrition deleted"}), 200

@api.route('/getpapers', methods=['GET'])
def get_papers():
    papers = Papers.query.all()
    papers = list(map(lambda item: item.serialize(), papers))

    return jsonify(papers), 200

@api.route('/newpaper', methods=['POST'])
def register_paper():
    body = request.get_json()
    name= body["name"]
    url = body["url"]
    description =body["description"]
  
    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=400)
    if "name" not in body:
        raise APIException("You need to specify the  name", status_code=400)
    if "url" not in body:
        raise APIException("You need to specify the user url", status_code=400)
    if "description" not in body:
        raise APIException("You need to specify the description", status_code=400)
  
    
    paper = Papers.query.filter_by(name=name).first()
    if paper is not None:
        raise APIException("Paper already exists", status_code=409)
    
    
    
    new_paper = Papers(name=name, url=url,description=description )

    db.session.add(new_paper)
    db.session.commit()

    return jsonify({"msg":"Paper successfully created"}), 201

@api.route('/deletepapers', methods=['DELETE'])
def delete_specific_paper():
    body = request.get_json()   
    paper_id = body["id"]

    paper = Papers.query.get(paper_id)

    if paper is None:
        return jsonify({"error": "Paper not found"}), 404

    db.session.delete(paper)
    db.session.commit()  
  
    return jsonify({"msg": "Paper deleted"}), 200    

s = URLSafeTimedSerializer("any key works")

@api.route('/new_password', methods=['PUT'])
def new_password():
    body=request.get_json()
    token=body["token"]
    user_id = s.loads(token.replace('_','.'), max_age=1800)
    user = User.query.get(user_id)
    password = body['password']
    user.password = bcrypt.generate_password_hash(password, 10).decode('utf-8')
    db.session.commit()
    return jsonify({'message': 'Password reset successfully'})


