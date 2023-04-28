from flask_sqlalchemy import SQLAlchemy
from .db import db

class Favoritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_id=db.Column(db.Integer, db.ForeignKey("exercise.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "exercise_id": self.exercise_id,
        }