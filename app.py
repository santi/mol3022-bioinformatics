#!/usr/bin/env python
from flask import Flask

app = Flask(__name__, static_url_path='frontend/build')

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('frontend/build', path)

@app.route('/')
def index():
    return 'Hello World!'

# Run the app locally
if __name__ == '__main__':
    app.run()
