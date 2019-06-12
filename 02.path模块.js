// path模块
// path模块供了一些工具函数，用于处理文件与目录的路径

const path = require('path');

const baseUrl = 'f:\\study\\wsl-my_node\\01.demo.js'
// console.log('path:', path);

// path.basename：返回一个路径的最后一部分
console.log('path.basename:', path.basename(baseUrl)); // 01.demo.js

// path.dirname：返回一个路径的目录名
console.log('path.dirname:', path.dirname(baseUrl)); // f:\study\wsl-my_node

// path.extname：返回一个路径的扩展名
console.log('path.extname:', path.extname(baseUrl)); // .js

// path.join：用于拼接给定的路径片段
console.log('path.join:', path.join(baseUrl, 'test.xxx')); // f:\study\wsl-my_node\01.demo.js\test.xxx

// path.normalize：将一个路径正常化
console.log('path.normalize:', path.normalize('aa\\\\bb\\cc\d')); // aa\bb\ccd