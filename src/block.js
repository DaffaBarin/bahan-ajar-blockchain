const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(nama, kampus, jurusan, angkatan, previousHash) {
    this.previousHash = previousHash;
    this.nama = nama;
    this.kampus = kampus;
    this.jurusan = jurusan;
    this.angkatan = angkatan;
    this.hash = this.calculateHash();
  }

  generateSalt() {
    var index = Math.floor(Math.random() * 11);
    var pattern = Math.pow((1 / 2) * index * (((2 * 5) / 6) * index), 8);
    // ubah pattern menjadi string

    var pattern_string = pattern.toString();

    return pattern_string;
  }

  calculateHash() {
    return SHA256(
      this.generateSalt() +
        this.previousHash +
        this.nama +
        this.kampus +
        this.jurusan +
        this.angkatan
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock() {
    return new Block(
      'Genesis',
      'GenesisName',
      'GenesisKampus',
      'GenesisJurusan',
      'GenesisAngkatan'
    );
  }
  getLatestPrevious() {
    let temp = this.chain[this.chain.length - 1];
    let previous = temp.hash;

    return previous;
  }
  addBlock(jsonOfInformation) {
    let readyBlock = new Block(
      jsonOfInformation.nama,
      jsonOfInformation.kampus,
      jsonOfInformation.jurusan,
      jsonOfInformation.angkatan,
      this.getLatestPrevious()
    );
    this.chain.push(readyBlock);
  }
  showBlockchain() {
    for (let value of this.chain) {
      return value;
    }
  }
}

let blockchain = new Blockchain();

module.exports = blockchain;
// console.log(Blockchain.showBlockchain())
