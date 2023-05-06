from flask_sqlalchemy import SQLAlchemy
from .db import db

#en general serializar lo que esta como nullable false.. if in doubt, slack

class Professionals(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    last_name = db.Column(db.String(50), unique=False, nullable=False)
    phone = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(280), unique=True, nullable=False)
    category = db.Column(db.String(250), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    country = db.Column(db.String(20), unique=False, nullable=False)
    image_profile = db.Column(db.String(250), unique=False, nullable=False)
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "phone": self.phone,
            "description": self.description,
            "category": self.category,
            "email": self.email,
            "country": self.country,
            "image_profile": self.image_profile,
        }