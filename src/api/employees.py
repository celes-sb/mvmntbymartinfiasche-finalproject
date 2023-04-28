from flask_sqlalchemy import SQLAlchemy
from .db import db

class Employees(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), unique=False, nullable=False)
    last_name = db.Column(db.String(50), unique=False, nullable=False)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    address = db.Column(db.String(80), unique=False, nullable=True)
    country = db.Column(db.String(20), unique=False, nullable=False)
    gender = db.Column(db.String(20), unique=False, nullable=True)
    otp = db.Column(db.Integer, unique=False, nullable=False)
    otp_active = db.Column(db.Boolean(), unique=False, nullable=False)
    last_login = db.Column(db.Date, unique=False, nullable=False)
    email_recover = db.Column(db.Integer, unique=False, nullable=False)
    image_profile = db.Column(db.String(250), unique=False, nullable=False) #es 250 enough?? averiguar
    security_question_q1 = db.Column(db.String(50), unique=False, nullable=False)
    security_question_q2 = db.Column(db.String(50), unique=False, nullable=False)
    creation_date = db.Column(db.Date, unique=False, nullable=False)
    role = db.Column(db.String(20), unique=False, nullable=False)
    

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
            # do not serialize the password, its a security breach
        }