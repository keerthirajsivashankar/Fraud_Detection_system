from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests (React <-> Flask)

# Dummy fraud detection logic
def detect_fraud(transaction):
    """
    Simulated fraud detection logic.
    Replace with ML model later.
    """
    amount = transaction.get("amount", 0)
    location = transaction.get("location", "")
    card_type = transaction.get("cardType", "")

    # Simple demo rules
    if amount > 10000:  
        return {"fraud": True, "reason": "Unusually high transaction amount"}
    elif location.lower() not in ["india", "usa", "uk"]:
        return {"fraud": True, "reason": "Suspicious location"}
    elif card_type.lower() not in ["visa", "mastercard", "rupay"]:
        return {"fraud": True, "reason": "Unrecognized card type"}
    else:
        return {"fraud": False, "reason": "Transaction looks normal"}


@app.route("/api/detect", methods=["POST"])
def fraud_detection():
    data = request.json
    result = detect_fraud(data)
    return jsonify(result)


@app.route("/api/cases", methods=["GET"])
def get_cases():
    """
    Returns some predefined fraud case simulations
    """
    cases = [
        {
            "id": 1,
            "amount": 15000,
            "location": "Russia",
            "cardType": "Visa",
            "expected": "Fraud (High Amount + Suspicious Location)"
        },
        {
            "id": 2,
            "amount": 200,
            "location": "India",
            "cardType": "MasterCard",
            "expected": "Safe Transaction"
        },
        {
            "id": 3,
            "amount": 8000,
            "location": "Brazil",
            "cardType": "Amex",
            "expected": "Fraud (Unknown Card + Location)"
        }
    ]
    return jsonify(cases)


@app.route("/")
def home():
    return "FraudShield Backend is running!"


if __name__ == "__main__":
    app.run(debug=True, port=5000)
