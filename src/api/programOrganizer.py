from flask_sqlalchemy import SQLAlchemy
from .db import db
from .programs import Programs
from .exercises import Exercises

#HACER UN ARCHIVO .PY POR CLASS

class ProgramOrganizer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    program_id = db.Column(db.Integer, db.ForeignKey('programs.id'), nullable=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "program_id": self.program_id,
            "exercise_id": self.exercise_id,
            "program_name": Programs.query.get(self.program_id).serialize()["program_name"],
            "exercise_name": Exercises.query.get(self.exercise_id).serialize()["name"],
        }