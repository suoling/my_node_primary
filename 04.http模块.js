const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(`url: ${req.url}  method: ${req.method}`);
//     res.end('收到了请求')
// })

// server.listen(8000)

// 执行get请求
http.get("http://www.baidu.com", (res)=>{
    // console.log(res);
    res.setEncoding('utf-8')

    let data = ''
    res.on('data', (chunk)=>{
        data += chunk
    })
    res.on('end', ()=>{
        console.log(data);
    })
})