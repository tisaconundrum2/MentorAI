from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    pass

@app.route("/")
def hello():
    return """
    <h1>Hello, World!</h1>
    <p>Welcome to the place where AI Oracles answer your every question.
    """


if __name__ == '__main__':
    app.run(debug=False)