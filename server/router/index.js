const express = require('express');
const path = require('path');
const axios = require('axios');
const { image, cart, reviews, related } = require('../config/services.js');

const PORT = 3000;
const app = express();
const PUBLIC_DIR = path.resolve(__dirname, '../..', 'public');
console.log(PUBLIC_DIR)
app.use(express.static(PUBLIC_DIR));

app.get('/api/items/:itemID', (req, res) => {
  axios.get(`http://localhost:3004/api/items/${0}`)
    .then((result) => res.send(result.data));
});
app.get('/api/item/:itemID', (req, res) => {
  axios.get(`http://localhost:3003/api/item/${5}`)
    .then((result) => res.send(result.data));
});
app.get('/api/reviews', (req, res) => {
  axios.get('http://localhost:3002/api/reviews')
    .then((result) => res.send(result.data));
});
app.get('/api/relatedItems/:id', (req, res) => {
  axios.get(`http://localhost:3001/api/relatedItems/${5}`)
    .then((result) => res.send(result.data));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// {
//   image: {
//     api: '/api/item/:id',
//     url: 'http://localhost:3004',
//     bundle: 'bundle.js',
//   },
//   cart: {
//     api: '/api/item/:itemID',
//     url: 'http://localhost:3003',
//     bundle: 'app.js',
//   },
//   reviews: {
//     api: '/api/reviews',
//     url: 'http://localhost:3002',
//     bundle: 'app.js',
//   },
//   related: {
//     api: '/api/relatedItems/:id',
//     url: 'http://localhost:3001',
//     bundle: 'bundle.js',
//   },
// };