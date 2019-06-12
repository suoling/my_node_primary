const fs = require('fs');
const crypto = require('crypto');

// 哈希算法：MD5，SHA1，SHA256，Hmac

// Hmac是基于key和hash的认证算法。
// 它在上面哈希算法的基础上，再传入一个key。
// 只要key变化，即使输入同样的数据也会得到不同的结果。
// 可以将Hmac理解为随机数增强的哈希算法。

// 计算字符串的hash
let data = '123456'
// const hash = crypto.createHash('md5')
// const hash = crypto.createHash('sha1')
// const hash = crypto.createHash('sha256')
const hash = crypto.createHash('sha512')
hash.update(data)
console.log(hash.digest('hex'));

// Hmac加密
let data_1 = '123456'
let key_1 = 'hehe'
const hash_1 = crypto.createHmac('sha512', key_1)
hash_1.update(data_1)
console.log(hash_1.digest('hex'));

let data_2 = '123456'
let key_2 = 'haha'
const hash_2 = crypto.createHmac('sha512', key_2)
hash_2.update(data_2)
console.log(hash_2.digest('hex'));

// 计算文件的hash
const hash_file = crypto.createHash('sha512')
const reader = fs.createReadStream('./tmp/hello')
reader.on('data', (chunk) =>{
    hash_file.update(chunk)
})
reader.on('end', ()=>{
    console.log(hash_file.digest('hex'));
})
