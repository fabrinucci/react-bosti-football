const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const Port = process.env.PORT | 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello my friend');
});

app.get('/leagues', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/leagues',
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
