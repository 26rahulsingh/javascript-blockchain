# README #

This app is small blockchain working mechanism implemented in JavaScript.

### How do I get set up? ###

* clone `https://github.com/26rahulsingh/javascript-blockchain.git`
* run `npm install`
* run `npm start`

### Sample Output ###
---
```
Mining block 1...
BLOCK MINED: 00000f9e622fd5a9838ca3346aa4ff1ca31d73d99fa70089c4bce8a876f8ad53

Mining block 2...
BLOCK MINED: 00000d79a5523cd31185fc516fd5d657b33341095e851bd8d2761a37b6a16f79

Blockchain valid? true
Try changing a block...
Blockchain valid? false
```

##### Chain output #####
---
```javascript
{
    "chain": [
        {
            "index": 0,
            "timestamp": 1586408546722,
            "data": "Genesis block",
            "previousHash": "0",
            "hash": "c51c9f24ff82a7b4462833a10ad665f2838ab139c2a4b03b3d161dfc8f33d5e8",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": 1586408546731,
            "data": {
                "amount": 100
            },
            "previousHash": "c51c9f24ff82a7b4462833a10ad665f2838ab139c2a4b03b3d161dfc8f33d5e8",
            "hash": "f9e594e358fc9764c891f2bf0667290fc2fb48162ab13304c0ccc82a5a3f5ac1",
            "nonce": 364339
        },
        {
            "index": 2,
            "timestamp": 1586408550420,
            "data": {
                "amount": 6
            },
            "previousHash": "00000f9e622fd5a9838ca3346aa4ff1ca31d73d99fa70089c4bce8a876f8ad53",
            "hash": "00000d79a5523cd31185fc516fd5d657b33341095e851bd8d2761a37b6a16f79",
            "nonce": 1471777
        }
    ],
    "difficulty": 5
}
```

##### Latest block #####
---
```javascript
{
  index: 2,
  timestamp: 1586408550420,
  data: { amount: 6 },
  previousHash: '00000f9e622fd5a9838ca3346aa4ff1ca31d73d99fa70089c4bce8a876f8ad53',
  hash: '00000d79a5523cd31185fc516fd5d657b33341095e851bd8d2761a37b6a16f79',
  nonce: 1471777
}
```
