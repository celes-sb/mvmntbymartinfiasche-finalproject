from flask_sqlalchemy import SQLAlchemy
from .db import db


class favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercise.id'), nullable=False)
    exercise_name = db.Column(db.Integer, db.ForeignKey('exercise.name'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "exercise_name": self.exercise_name,
        }