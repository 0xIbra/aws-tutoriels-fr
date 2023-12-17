import json


def get_generations(event, context):
    return {
        "statusCode": 200,
        "body": json.dumps([
            {'id': 1, 'prompt': 'A fire fighter staring in a restaurant during the day with a fire, cel shaded, high contrast, digital art', 'image': 'https://placehold.co/600x400'},
            {'id': 2, 'prompt': 'A samurai flying in a nuclear plant at night with giant balls of yarn, Retrofuturism artwork, muted color', 'image': 'https://placehold.co/600x400'}
        ])
    }
