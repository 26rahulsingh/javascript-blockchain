const SHA256 = require("crypto-js/sha256");

class Block {
  constructor (timestamp, data, previousHash = '') {
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
        
    // When creating a new Block, automatically calculate its hash.
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;