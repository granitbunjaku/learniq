import jwt
import datetime
from decouple import config

JWT_SECRET = config('secret')
JWT_ALGORITHM = config('algorithm')


# me kthy tokenin e gjenerum
def token_response(token: str):
    return {
        "access_token": token
    }


# me kriju jwt
def signJWT(userID: int, userEmail: str):
    expiration_time = datetime.datetime.utcnow() + datetime.timedelta(minutes=50)
    payload = {
        "userID": userID,
        "userEmail": userEmail,
        "exp": expiration_time
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return token_response(token)


def decodeJWT(token: str):
    try:
        decode_token = jwt.decode(token, JWT_SECRET, algorithms=JWT_ALGORITHM)
        return decode_token
    except Exception:
        return False
