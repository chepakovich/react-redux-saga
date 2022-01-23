import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'http://localhost:4000/',
  headers: { 'Content-Type': 'application/json' },
});

// Get operators
export const getOperators = async () => {
  try {
    const response = await axios.get('operators');
    return response.data.operators;
  } catch (err) {
    return console.error(err);
  }
};

// Get companies
export const getCompanies = async () => {
  try {
    const response = await axios.get('companies');
    return response.data.companies;
  } catch (err) {
    return console.error(err);
  }
};

// Get instruments
export const getInstruments = async () => {
  try {
    const response = await axios.get('instruments');
    return response.data.instruments;
  } catch (err) {
    return console.error(err);
  }
};

// Get runs
export const getRuns = async () => {
  try {
    const response = await axios.get('runs');
    return response.data.runs;
  } catch (err) {
    return console.error(err);
  }
};
