const express = require('express');
const blockchain = require('./block');
var path = require('path');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log(blockchain)

app.get('/blockchain', (req, res) => {
  res.json(blockchain);
});
app.get('/home', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.post('/home', (req, res) => {
  block = req.body;
  blockchain.addBlock(block);

  res.sendFile(path.resolve('index.html'));
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
