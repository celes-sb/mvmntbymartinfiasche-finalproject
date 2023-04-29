from flask_sqlalchemy import SQLAlchemy
from .db import db

#en general serializar lo que esta como nullable false.. if in doubt, slack

class Exercises(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    category = db.Column(db.String(50), unique=False, nullable=False)
    url_youtube = db.Column(db.String(250), unique=True, nullable=False)
    description = db.Column(db.String(280), unique=True, nullable=False)
    cover = db.Column(db.String(250), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "url_youtube": self.url_youtube,
            "description": self.description,
            "cover": self.cover,
        }

class Favoritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey("exercises.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "exercise_id": self.exercise_id,
        }