const express = require('express');
const blockchain = require('./block');
var path = require('path');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log(blockchain)

app.get('/', (req, res) => {
  res.json(blockchain);
  console.log(blockchain);
});
app.get('/home', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.post('/blockchain', (req, res) => {
  res.json(req.body);
  block = req.body;
  // console.log(typeof(block.previousHash));
  blockchain.addBlock(block);
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
