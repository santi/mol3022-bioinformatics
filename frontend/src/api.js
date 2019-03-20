import axios from "axios";

// const domain_name = "http://localhost:5000";
const domain_name = "https://mol3022.herokuapp.com";

export const getTransFactorList = () =>
  axios.get(`${domain_name}/jaspar/matrix`);

export const getProbabilityFrequencyMatrix = matrixId =>
  axios.get(`${domain_name}/jaspar/matrix/${matrixId}`);

export const getSequenceProbabilities = (sequence, pfm) =>
  axios.post(`${domain_name}/probabilities`, {
    sequence: sequence,
    pfm: pfm,
  });
