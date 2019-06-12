// 全局变量
// 全局变量是指我们在任何js文件的任何地方都可以使用的变量。

// __dirname：当前文件的目录
console.log('__dirname:', __dirname); // f:\study\wsl-my_node

// __filename：当前文件的绝对路径
console.log('__filename:', __filename); // f:\study\wsl-my_node\01.demo.js

// console：控制台对象，可以输出信息
console.log('console:', console);

// process：进程对象，可以获取进程的相关信息，环境变量等
console.log('process:', process);

// setTimeout/clearTimeout：延时执行
console.log('setTimeout/clearTimeout:', setTimeout, clearTimeout);

// setInterval/clearInterval：定时器
console.log('setInterval/clearInterval:', setInterval, clearInterval);