import axios from 'axios';

export const footballApi = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-apisports-key': '3845ec1cb35244d01562e7045b2a576c',
  },
});
