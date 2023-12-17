from flask import Flask, jsonify, request


app = Flask(__name__)

from routes import users_blueprint
from routes import generations_blueprint

app.register_blueprint(users_blueprint)
app.register_blueprint(generations_blueprint)
