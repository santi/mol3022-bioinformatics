
from functools import reduce

import requests
import copy
import math
import numpy as np

# from https://davetang.org/muse/2013/10/01/position-weight-matrix/
BACKGROUND_PROBABILITY_OF_BASE = 0.25
BASE_INDICES = {
    'A': 0,
    'C': 1,
    'T': 2,
    'G': 3
}


def get_number_of_sites(pfm):
    print(pfm)
    pfm = np.array(pfm)
    pfv = np.sum(pfm, axis=0)
    print(pfv)

    return pfv[0]


def pseudocount(number_of_sites):
    return np.sqrt(number_of_sites)


def corrected_probability_of_bases(pfm):
    N = get_number_of_sites(pfm)
    return (pfm + pseudocount(N) * 0.25) / (N + pseudocount(N))


def pwm_conversion(pfm):
    # pwm conversion formulae given by 
    # https://www.nature.com/articles/nrg1315.pdf
    return np.log2(corrected_probability_of_bases(pfm) / BACKGROUND_PROBABILITY_OF_BASE).tolist()


def score_sequence(sequence, pwm):
    probabilities = []
    matrix_profile_length = len(pwm[0,:])
    print(f"matrix_profile_length: {matrix_profile_length}")
    for i in range(len(sequence) - matrix_profile_length + 1):
        scores = [pwm[BASE_INDICES[sequence[j]], j - i] for j in range(i, i + matrix_profile_length)]
        probabilities.append(sum(scores))
    
    return probabilities

def get_sequence_probability(sequence, pwm):
    print(f"Sequence: {sequence}")

    pwm = np.array(pwm)
    print(f'pwm: {pwm}')
   
    probabilities = score_sequence(sequence, pwm)
    print(f"Probabilities: {probabilities}")

    return probabilities
