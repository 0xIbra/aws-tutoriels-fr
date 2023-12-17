import json


def get_users(event, context):
    return {
        "statusCode": 200,
        "body": json.dumps([
            {
                "id": 1,
                "name": "John Doe"
            },
            {
                "id": 2,
                "name": "Jane Doe"
            }
        ])
    }
