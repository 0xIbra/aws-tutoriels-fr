from flask import Blueprint, jsonify


blueprint = Blueprint('generations', __name__)


@blueprint.route('/generations', methods=['GET'])
def get_generations():
    return jsonify([
        {'id': 1, 'prompt': 'A fire fighter staring in a restaurant during the day with a fire, cel shaded, high contrast, digital art', 'image': 'https://placehold.co/600x400'},
        {'id': 2, 'prompt': 'A samurai flying in a nuclear plant at night with giant balls of yarn, Retrofuturism artwork, muted color', 'image': 'https://placehold.co/600x400'}
    ])
