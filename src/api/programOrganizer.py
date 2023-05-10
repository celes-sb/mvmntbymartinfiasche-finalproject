from flask_sqlalchemy import SQLAlchemy
from .db import db
from .programs import Programs
from .exercises import Exercises

#HACER UN ARCHIVO .PY POR CLASS

class ProgramOrganizer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    program_id = db.Column(db.Integer, db.ForeignKey('programs.id'), nullable=False)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=False)
    day = db.Column(db.String(50), unique=False, nullable=True)
    type = db.Column(db.String(50), unique=False, nullable=True)
    session_1 = db.Column(db.String(50), unique=False, nullable=True)
    weight_1 = db.Column(db.Float, unique=False, nullable=True)
    repetitions_1 = db.Column(db.Integer, unique=False, nullable=True)
    series_1 = db.Column(db.Integer, unique=False, nullable=True)
    rest_1 = db.Column(db.String(50), unique=False, nullable=True)
    comments_1 = db.Column(db.String(160), unique=False, nullable=True)
    session_2 = db.Column(db.String(50), unique=False, nullable=True)
    weight_2 = db.Column(db.Float, unique=False, nullable=True)
    repetitions_2 = db.Column(db.Integer, unique=False, nullable=True)
    series_2 = db.Column(db.Integer, unique=False, nullable=True)
    rest_2 = db.Column(db.String(50), unique=False, nullable=True)
    comments_2 = db.Column(db.String(160), unique=False, nullable=True)
    session_3 = db.Column(db.String(50), unique=False, nullable=True)
    weight_3 = db.Column(db.Float, unique=False, nullable=True)
    repetitions_3 = db.Column(db.Integer, unique=False, nullable=True)
    series_3 = db.Column(db.Integer, unique=False, nullable=True)
    rest_3 = db.Column(db.String(50), unique=False, nullable=True)
    comments_3 = db.Column(db.String(160), unique=False, nullable=True)
    session_4 = db.Column(db.String(50), unique=False, nullable=True)
    weight_4 = db.Column(db.Float, unique=False, nullable=True)
    repetitions_4 = db.Column(db.Integer, unique=False, nullable=True)
    series_4 = db.Column(db.Integer, unique=False, nullable=True)
    rest_4 = db.Column(db.String(50), unique=False, nullable=True)
    comments_4 = db.Column(db.String(160), unique=False, nullable=True)


    def serialize(self):
        serialized_data = {
            "id": self.id,
            "program_id": self.program_id,
            "exercise_id": self.exercise_id,
            "program_name": Programs.query.get(self.program_id).serialize()["program_name"],
            "exercise_name": Exercises.query.get(self.exercise_id).serialize()["name"],
            "day": self.day,
            "type": self.type,
            "session_1": self.session_1,
            "weight_1": self.weight_1,
            "repetitions_1": self.repetitions_1,
            "series_1": self.series_1,
            "rest_1": self.rest_1,
            "comments_1": self.comments_1,
            "session_2": self.session_2,
            "weight_2": self.weight_2,
            "repetitions_2": self.repetitions_2,
            "series_2": self.series_2,
            "rest_2": self.rest_2,
            "comments_2": self.comments_2,
            "session_3": self.session_3,
            "weight_3": self.weight_3,
            "repetitions_3": self.repetitions_3,
            "series_3": self.series_3,
            "rest_3": self.rest_3,
            "comments_3": self.comments_3,
            "session_4": self.session_4,
            "weight_4": self.weight_4,
            "repetitions_4": self.repetitions_4,
            "series_4": self.series_4,
            "rest_4": self.rest_4,
            "comments_4": self.comments_4,

        }
        return {key: value for key, value in serialized_data.items() if value is not None}