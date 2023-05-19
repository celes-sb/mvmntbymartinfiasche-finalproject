from flask_sqlalchemy import SQLAlchemy
from .db import db

class TokenBlockedList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(250), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=False)
    created_at = db.Column(db.DateTime, nullable=False)

    def serialize(self):
        return {
            "id":self.id,
            "token":self.token,
            "email":self.email,
            "created":self.created_at
        }