#!/usr/bin/env python
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from sequence_scorer import get_sequence_probability, pwm_conversion
import requests
import json

app = Flask(__name__)
CORS(app)


@app.route('/matrix')
def matrix():
    jaspar = []
    uniprobe = []
    with open('jaspar_matrices_short.json') as json_file:  
        jaspar = json.load(json_file)
    with open('uniprobe_matrices_short.json') as json_file:
        uniprobe = json.load(json_file)
    matrices = {
        'jaspar': jaspar,
        'uniprobe': uniprobe
    }
    return jsonify(matrices)


@app.route('/jaspar/matrix/<matrix_id>')
def jaspar_matrix_details(matrix_id):
    name = ''.join(matrix_id.split('-')[:-1])
    print('getting ' + name)
    result = requests.get(f'http://jaspar.genereg.net/api/v1/matrix/{name}/').json()
    pfm = [base_freq for base_freq in result['pfm'].values()]
    pwm = pwm_conversion(pfm)
    return jsonify(pwm)


@app.route('/uniprobe/matrix/<matrix_id>')
def uniprobe_matrix_details(matrix_id):
    pwm = []
    with open('uniprobe_matrices.json') as json_file:  
        matrices = json.load(json_file)
        for matrix in matrices:
            if matrix['matrix_id'] == matrix_id:
                pwm = matrix['pwm']
    return jsonify(pwm)


@app.route('/probabilities', methods=['POST'])
def probabilities():
    data = request.json
    probabilities = get_sequence_probability(data['sequence'].upper(), data['pwm'])
    return jsonify(probabilities)


# Run the app locally
if __name__ == '__main__':
    app.run()
