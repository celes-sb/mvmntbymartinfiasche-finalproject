from flask_sqlalchemy import SQLAlchemy
from .db import db
from .programs import Programs
from .exercises import Exercises

#HACER UN ARCHIVO .PY POR CLASS

class ProgramOrganizer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    program_id = db.Column(db.Integer, db.ForeignKey('programs.id'), nullable=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=True)
    session = db.Column(db.Integer, unique=False, nullable=False)
    weight = db.Column(db.Float, unique=False, nullable=False)
    repetitions = db.Column(db.Integer, unique=False, nullable=False)
    series = db.Column(db.Integer, unique=False, nullable=False)
    day = db.Column(db.String(50), unique=False, nullable=False)
    type = db.Column(db.String(50), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "program_id": self.program_id,
            "exercise_id": self.exercise_id,
            "program_name": Programs.query.get(self.program_id).serialize()["program_name"],
            "exercise_name": Exercises.query.get(self.exercise_id).serialize()["name"],
            "session": self.session,
            "weight": self.weight,
            "repetitions": self.repetitions,
            "series": self.series,
            "day": self.day,
            "type": self.type,
        }