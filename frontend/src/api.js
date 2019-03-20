import axios from "axios";

export const getTransFactorList = () =>
  axios.get("http://localhost:5000/jaspar/matrix");

export const getProbabilityFrequencyMatrix = matrixId =>
  axios.get(`http://localhost:5000/jaspar/matrix/${matrixId}`);

export const getSequenceProbabilities = (sequence, pfm) =>
  axios.post(`http://localhost:5000/probabilities`, {
    sequence: sequence,
    pfm: pfm,
  });
