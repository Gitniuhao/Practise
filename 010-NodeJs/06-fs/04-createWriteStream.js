const fs = require('fs');

//1.打开可写流；
const ws = fs.createWriteStream('./04-ws.txt');
//2.写入流；
ws.write('臭弟弟')
//3结束写入；
ws.on('finish',()=>{
	console.log('write stream finish')
})
ws.end('ok');
//4，关闭可写流
ws.on('close',()=>{
	console.log('close stream')
})
