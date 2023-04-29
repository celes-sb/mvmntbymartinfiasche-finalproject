from flask_sqlalchemy import SQLAlchemy
from .db import db



class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    program_id = db.Column(db.Integer, db.ForeignKey('programs.id'), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    training_days = db.Column(db.String(50), nullable=False)
    rest_days = db.Column(db.String(50), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "program_id": self.program_id,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "training_days": self.training_days,
            "rest_days": self.rest_days
        }