# README #

This app is small blockchain working mechanism implemented in JavaScript.

### How do I get set up? ###

* clone `https://github.com/26rahulsingh/javascript-blockchain.git`
* run `npm install`
* run `node blockchain.js`

### Sample Output ###
```javascript
{
    "chain": [
        {
            "previousHash": "0",
            "timestamp": 1586404499611,
            "data": "Genesis block",
            "hash": "c74ce669645a31b260d801b49f407c7d4c4c4190b91cb0ef11d06e4ef305dd08"
        },
        {
            "previousHash": "c74ce669645a31b260d801b49f407c7d4c4c4190b91cb0ef11d06e4ef305dd08",
            "timestamp": 1586404499614,
            "data": {
                "amount": 4
            },
            "hash": "6b1daca0d52033b0cd717b75a07a1b96fdd8bb9666ec45821a11b676158e5eed"
        },
        {
            "previousHash": "6b1daca0d52033b0cd717b75a07a1b96fdd8bb9666ec45821a11b676158e5eed",
            "timestamp": 1586404499615,
            "data": {
                "amount": 5
            },
            "hash": "174e551d7721c796ebbfd5eeffc5837fe636901ab0dbca4683b8a942c2bc0ecf"
        }
    ]
}
getLastBlock:  Block {
  previousHash: '6b1daca0d52033b0cd717b75a07a1b96fdd8bb9666ec45821a11b676158e5eed',
  timestamp: 1586404499615,
  data: { amount: 5 },
  hash: '174e551d7721c796ebbfd5eeffc5837fe636901ab0dbca4683b8a942c2bc0ecf'
}
```

