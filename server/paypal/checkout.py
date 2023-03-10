from fastapi import APIRouter, Request
from paypalcheckoutsdk.core import PayPalHttpClient, SandboxEnvironment
from os import getenv
from paypalcheckoutsdk.orders import OrdersCreateRequest
from fastapi.responses import JSONResponse
payment_routes = APIRouter()


# Creating Access Token for Sandbox
client_id = "AYaUnLIACsx6drKGBssNpy6d55C1JqAY9XRqR-mMwRHelHrgZQU2nzp3908FqxhtfWXWSrqK9hZlkId9"
client_secret = "EBN_uivIu_OXvU4eBd2_B0Dy4noVCeFMpot7MA6AP3B1RXxCLVZRXPzwO0uztAYX6JQhZzUiGjwo30x4"

# Creating an environment
# environment = SandboxEnvironment(
#     client_id = client_id, 
#     client_secret= client_secret
#     )

# client = PayPalHttpClient(environment)

@payment_routes.post("/create-order")
async def create_order_paypal(request: Request):
    try:
        return request
        data = await request.json()
        request = OrdersCreateRequest()

        request.prefer('return=representation')
        request.request_body(
            {
                "intent": "CAPTURE",
                "purchase_units": [
                    {
                        "amount": {
                            "currency_code": "USD",
                            "value": "100.00"
                        }
                    }
                ],
                "items": data
            }
        )
        response = client.execute(request)
        return JSONResponse(content={"id": response.result.id})
    except Exception:
        print(Exception)