const crypto = require('crypto');

// 对称加密算法：AES

// AES是一种常用的对称加密算法，加解密都用同一个密钥。

// AES加密
let data = '123456'
let password = 'baby'
const cipher  = crypto.createCipher('aes192', password)
let encrypted = cipher.update(data, 'utf-8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted);

// AES解密：
const decipher = crypto.createDecipher('aes192', password)
let encrytedData = 'd1b992fe45e85e43f3b73e0716874bc8'
let decrypted = decipher.update(encrytedData, 'hex', 'utf-8')
decrypted += decipher.final('utf-8')
console.log(decrypted);
