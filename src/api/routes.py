"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.db import db
from api.user import User
from api.utils import generate_sitemap, APIException

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

@api.route('/register', methods=['POST'])
def register_user():
    body = request.get_json()
    email = body["email"]
    name = body["name"]
    password = body["password"]
    is_active = body["is_active"]

    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=400)
    if "email" not in body:
        raise APIException("You need to specify the email", status_code=400)
    if "name" not in body:
        raise APIException("You need to specify the name", status_code=400)
    if "password" not in body:
        raise APIException("You need to specify the password", status_code=400)
    if "is_active" not in body:
        raise APIException("You need to specify the is_active", status_code=400)
    
    user = User.query.filter_by(email=email).first()
    if user is not None:
        raise APIException("Email is already registered", status_code=409)
    
    password_encrypted = bcrypt.generate_password_hash(password,10).decode("utf-8")
    
    new_user = User(email=email, name=name, password=password_encrypted, is_active=is_active)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"mensaje":"Usuario creado correctamente"}), 201

@api.route('/correo', methods=['POST'])
def handle_email():
    body = request.get_json()
    message = body["message"]
    to = body ["to"]
    subject = body ["subject"]

    sendEmail(message, to, subject)

    return jsonify({"message":"message sent"}), 200
