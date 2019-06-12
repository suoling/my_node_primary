// fs模块
// 文件操作相关的模块

const fs = require('fs');

// 异步删除文件
// fs.unlink('./test.txt', (err) => {
//     if (err) throw err;
//     console.log('已成功删除 ./test.txt');
// })

// 同步删除文件
// try {
//     fs.unlinkSync('./ttt.xxx')
//     console.log('已成功删除 ./ttt.xxx');

// } catch (err) {
//     console.log('err')
// }

// 重命名指定的文件，并查找文件各种状态
// fs.rename('./tmp/hello', './tmp/world', (err) => {
//     if (err) throw err;
//     fs.stat('./tmp/world', (err, stats) => {
//         if (err) throw err;
//         console.log(`文件属性: ${JSON.stringify(stats)}`);
//     });
// });

// fs.stat/fs.statSync：访问文件的元数据，比如文件大小，文件的修改时间

// fs.readFile/fs.readFileSync：异步/同步 读取文件
fs.readFile('./tmp/hello', (err, data) => {
    if (err) throw err;
    console.log(data, data.length);
})
// fs.writeFile/fs.writeFileSync：异步/同步 写入文件

// fs.readdir/fs.readdirSync：异步/同步 读取文件夹内容

// fs.unlink/fs.unlinkSync：异步/同步 删除文件

// fs.rmdir/fs.rmdirSync：异步/同步 只能删除空文件夹，思考：如何删除非空文件夹？

// 删除非空文件夹：使用fs-extra 第三方模块来删除。

// fs.watchFile：监视文件的变化

const reader = fs.createReadStream('./tmp/hello');
const writer = fs.createWriteStream('./tmp/world');
// 方法一
// let total = 0;
// reader.on('data', (chunk) => {
//     total += chunk.length;
//     writer.write(chunk)
// })

// reader.on('end', () => {
//     console.log('总大小：', total / (1024 * 1024 * 1024))
// })

// 方法二
reader.pipe(writer);

