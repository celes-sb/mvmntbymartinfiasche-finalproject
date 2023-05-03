from flask_sqlalchemy import SQLAlchemy
from .db import db

#HACER UN ARCHIVO .PY POR CLASS

class Programs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    day = db.Column(db.String(50), unique=False, nullable=False)
    category = db.Column(db.String(50), unique=False, nullable=False)
    exercise_number = db.Column(db.String(20), unique=True, nullable=False)

    sets = db.Column(db.Integer, unique=True, nullable=False)
    repetitions = db.Column(db.Integer, unique=True, nullable=False)
    rest_time = db.Column(db.Integer, unique=False, nullable=True)
    creation_date = db.Column(db.Date, unique=False, nullable=False)
    date_finished = db.Column(db.Date, unique=False, nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "day": self.day,
            "category": self.category,
            "exercise_number": self.exercise_number,
            "sets": self.sets,
            "repetitions": self.repetitions,
            "load": self.load,
            "rest_time": self.rest_time,
            "creation_date": self.creation_date,
            "date_finished": self.date_finished,
            
            
        
            # do not serialize the password, its a security breach
        }