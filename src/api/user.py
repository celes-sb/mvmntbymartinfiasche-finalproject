from flask_sqlalchemy import SQLAlchemy
from .db import db

#HACER UN ARCHIVO .PY POR CLASS

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), unique=False, nullable=False)
    last_name = db.Column(db.String(50), unique=False, nullable=False)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    birthdate = db.Column(db.Date, unique=False, nullable=True)
    address = db.Column(db.String(80), unique=False, nullable=True)
    country = db.Column(db.String(20), unique=False, nullable=False)
    gender = db.Column(db.String(20), unique=False, nullable=True)
    emergency_contact_name = db.Column(db.String(20), unique=False, nullable=True)
    emergency_contact_number = db.Column(db.String(20), unique=False, nullable=True)
    emergency_contact_relationship = db.Column(db.String(20), unique=False, nullable=True)
    credit_card = db.Column(db.String(), unique=False, nullable=False) #revisar!!! lo de default y numero
    otp = db.Column(db.Integer, unique=False, nullable=False)
    otp_active = db.Column(db.Boolean(), unique=False, nullable=False)
    twofa = db.Column(db.Boolean(), unique=False, nullable=False)
    last_login = db.Column(db.Date, unique=False, nullable=False)
    email_recover = db.Column(db.Integer, unique=False, nullable=False)
    image_profile = db.Column(db.String(250), unique=False, nullable=False) #es 250 enough?? averiguar
    security_question_q1 = db.Column(db.String(50), unique=False, nullable=False)
    security_question_q2 = db.Column(db.String(50), unique=False, nullable=False)
    creation_date = db.Column(db.Date, unique=False, nullable=False)
    role = db.Column(db.String(20), unique=False, nullable=False)
    status = db.Column(db.String(20), unique=False, nullable=False)
    height = db.Column(db.Float(10), unique=False, nullable=True)
    weight = db.Column(db.Float(10), unique=False, nullable=True)
    other_sports = db.Column(db.String(20), unique=False, nullable=True)
    level_training = db.Column(db.String(20), unique=False, nullable=False)
    eating_habits = db.Column(db.String(20), unique=False, nullable=True)
    injuries = db.Column(db.String(100), unique=False, nullable=False)
    availability = db.Column(db.String(50), unique=False, nullable=False)
    email_subscription = db.Column(db.Boolean(), unique=False, nullable=False)
    numeric_preference = db.Column(db.String(10), unique=False, nullable=False)
    access_gym = db.Column(db.Boolean(), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "country": self.country,
            "creation_date": self.creation_date,
            "height": self.height,
            "weight": self.weight,
            "level_training": self.level_training,
            "injuries": self.injuries,
            "availability": self.availability,
            "numeric_preference": self.numeric_preference,
            "access_gym": self.access_gym
            # do not serialize the password, its a security breach
        }
