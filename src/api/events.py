from flask_sqlalchemy import SQLAlchemy
from .db import db

class Events(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    event_type = db.Column(db.String(20), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(50))
    is_online = db.Column(db.Boolean, default=False)
    coach = db.Column(db.String(50))
   

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "event_type": self.event_type,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "location": self.location,
            "is_online": self.is_online,
            "coach": self.coach,   #quien seria el coach en el evento
            
        }