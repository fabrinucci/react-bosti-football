import axios from 'axios';

export const footballApi = axios.create({
  baseURL: 'http://localhost:5000',
});
