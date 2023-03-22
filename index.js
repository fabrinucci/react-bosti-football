import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const Port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello my friend');
});

app.get('/leagues', (req, res) => {
  const options = {
    method: 'GET',
    baseURL: 'https://v3.football.api-sports.io/leagues',
    headers: {
      'x-apisports-key': process.env.API_KEY,
    },
  };

  axios.request(options).then((response) => {
    res.json(response.data);
  });
});

app.listen(Port, () => {
  console.log(`App listen in: http://localhost:${Port}`);
});
