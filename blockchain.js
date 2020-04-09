const Block = require('./block');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 5;
  }
  
  // create genesis block
  createGenesisBlock () {
    return new Block(0, Date.now(), "Genesis block", "0");
  }
  
  // return latest block of chain.
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }
  
  // add a new block to chain
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }
  
  // verify if chain is valid
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

// module.exports = Blockchain

let sampleCoin = new Blockchain();
console.log('Mining block 1...');
sampleCoin.addBlock(new Block(1, Date.now(), { amount: 4 }));

console.log('Mining block 2...');
sampleCoin.addBlock(new Block(2, Date.now(), { amount: 6 }));
console.log('Blockchain valid? ' + sampleCoin.isChainValid());

// Trying to manipulate a block.
console.log('Try changing a block...');
sampleCoin.chain[1].data = { amount: 100 };

// Verify if blockchain is valid or not.
sampleCoin.chain[1].hash = sampleCoin.chain[1].calculateHash();
console.log("Blockchain valid? " + sampleCoin.isChainValid());

// Print blockchain data.
console.log(JSON.stringify(sampleCoin, null, 4));
// Print latest block.
console.log('getLastBlock: ', sampleCoin.getLatestBlock());
