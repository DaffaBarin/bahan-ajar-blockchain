const express = require('express');
const blockchain = require('./block');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// console.log(blockchain)

app.get("/", (req,res) => {
    res.json(blockchain)
});

app.post("/",(req,res) => {
    res.json(req.body);
    block = req.body;
    // console.log(typeof(block.previousHash));
    blockchain.addBlock(block);
})

app.listen(port, () =>{
    console.log(`App listening on ${port}`)
})