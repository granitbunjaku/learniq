from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from .jwthandler import decodeJWT

class jwtBearer(HTTPBearer):
    def __init__(self, auto_Error : bool = True):
        super(jwtBearer, self).__init__(auto_error=auto_Error)

    async def __call__(self, request: Request):
        credentials = HTTPAuthorizationCredentials = await super(jwtBearer, self).__call__(request)
        if not credentials.scheme == "Bearer":
            raise HTTPException(403, "Invalid or expired token")
        if self.verify_jwt(credentials.credentials):
            return credentials.credentials
        raise HTTPException(403, "Invalid or expired token")

    def verify_jwt(self, jwt: str):
        isTokenValid = False
        payload = decodeJWT(jwt)
        if payload:
            isTokenValid = True
        return isTokenValid

