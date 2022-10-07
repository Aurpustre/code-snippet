const crypto = require('crypto');

const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});


console.log(privateKey);
console.log(publicKey);

const encodedData = crypto.publicEncrypt(publicKey, Buffer.from('我易','utf8')); // 传入utf8编码的数据
console.log(encodedData.toString('hex'));

const rawData = crypto.privateDecrypt(privateKey, Buffer.from(encodedData, 'hex')); // 传入hex(16进制)数据
console.log(rawData.toString('utf8'));
