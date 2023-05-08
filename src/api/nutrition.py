from flask_sqlalchemy import SQLAlchemy
from .db import db

#HACER UN ARCHIVO .PY POR CLASS

class Nutrition(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    
    date = db.Column(db.Date, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    height = db.Column(db.Float, nullable=True)
    body_fat = db.Column(db.Float, nullable=False)
    muscle_mass = db.Column(db.Float, nullable=False)
    water_intake = db.Column(db.Integer, nullable=False)
    calories_intake = db.Column(db.Integer, nullable=False)
    protein_intake = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            
            "date": self.date,
            "weight": self.weight,
            "height": self.height,
            "body_fat": self.body_fat,
            "muscle_mass": self.muscle_mass,
            "water_intake": self.water_intake,
            "calories_intake": self.calories_intake,
            "protein_intake": self.protein_intake,
        }