from flask import Blueprint, jsonify


blueprint = Blueprint('users', __name__)


@blueprint.route('/users', methods=['GET'])
def get_users():
    return jsonify([{'name': 'John Doe'}, {'name': 'Jane Doe'}])


@blueprint.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    if user_id > 3:
        return jsonify({'code': 404, 'message': 'User not found'}), 404

    return jsonify({'id': user_id, 'name': 'John Doe'})
