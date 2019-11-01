const fs = require('fs');

//1.打开可写流；2.写入流；3。结束写入；4，关闭可写流
const ws = fs.createWriteStream('./04-ws.txt');
ws.write('臭弟弟')
ws.on('finish',()=>{
	console.log('write stream finish')
})
ws.end('ok');
ws.on('close',()=>{
	console.log('close stream')
})
