const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

// 注册XXX事件
myEmitter.on('wsl', (a) => {
    console.log('wsl事件被触发，参数：' +  a)
})

// 1秒钟之后触发wsl事件，并传递参数
setTimeout(() => {
    myEmitter.emit('wsl', 'testData')
}, 1000)

console.log(process.env.NODE_ENV)