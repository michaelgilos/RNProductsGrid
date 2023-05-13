import axios from 'axios';

// if using emulator
const BASE_URL = 'http://10.0.2.2:8000';

export const api = axios.create({
  baseURL: BASE_URL,
});
