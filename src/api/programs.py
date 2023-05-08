from flask_sqlalchemy import SQLAlchemy
from .db import db

#HACER UN ARCHIVO .PY POR CLASS

class Programs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    program_name = db.Column(db.String(50), unique=False, nullable=True)
    category = db.Column(db.String(50), unique=False, nullable=True)
    creation_date = db.Column(db.Date, unique=False, nullable=True)
    date_finished = db.Column(db.Date, unique=False, nullable=True)


    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "program_name": self.program_name,
            "category": self.category,
            "creation_date": self.creation_date,
            "date_finished": self.date_finished,
        }