import axios from "axios";

// const domain_name = "http://localhost:5000";
const domain_name = "https://mol3022-server.herokuapp.com";

export const getJasparTransFactorList = () =>
  axios.get(`${domain_name}/matrix`);

export const getProbabilityFrequencyMatrix = (matrixId, type) => {
  if (type === "jaspar") {
    return axios.get(`${domain_name}/jaspar/matrix/${matrixId}`);
  } else if (type === "uniprobe") {
    return axios.get(`${domain_name}/uniprobe/matrix/${matrixId}`);
  }
};

export const getSequenceProbabilities = (sequence, pwm) =>
  axios.post(`${domain_name}/probabilities`, {
    sequence: sequence,
    pwm: pwm,
  });
