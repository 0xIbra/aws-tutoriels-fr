from flask import Flask, jsonify, request


app = Flask(__name__)


@app.route('/users', methods=['GET'])
def get_users():
    return jsonify([{'name': 'John Doe'}, {'name': 'Jane Doe'}])
