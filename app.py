#!/usr/bin/env python
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from backend.sequence_scorer import get_sequence_probability
import requests

app = Flask(__name__)
CORS(app)


@app.route('/jaspar/matrix')
def jaspar_matrix():
    return send_from_directory('.', 'matrices_short.json')


@app.route('/jaspar/matrix/<matrix_id>')
def jaspar_matrix_details(matrix_id):
    result = requests.get(f'http://jaspar.genereg.net/api/v1/matrix/{matrix_id}/').json()
    pfm = [base_freq for base_freq in result['pfm'].values()]
    return jsonify(pfm)


@app.route('/probabilities', methods=['POST'])
def probabilities():
    data = request.json
    print(data)
    probabilities = get_sequence_probability(data['sequence'].upper(), data['pfm'])
    return jsonify(probabilities)

@app.route('/tfbind')
def tfbind():
    return send_from_directory('.', 'matrices_short.json')

# Run the app locally
if __name__ == '__main__':
    app.run()
