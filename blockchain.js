const Block = require('./block');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock () {
    return new Block(Date.now(), "Genesis block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}


// module.exports = Blockchain
let coin = new Blockchain();
coin.addBlock(new Block(Date.now(), { amount: 4 }));
coin.addBlock(new Block(Date.now(), { amount: 5 }));
console.log(JSON.stringify(coin, null, 4));
console.log('getLastBlock: ', coin.getLatestBlock());