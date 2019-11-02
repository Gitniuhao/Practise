const fs = require('fs');
//1.打开可读流；

const rs = fs.createReadStream('./04-ws.txt');
//2.读取可读流内容；
rs.on('data',(chunk)=>{
	console.log(chunk)
})
//3结束读取；
rs.on('end',()=>{
	console.log('end..')
})
//4.关闭可读流
rs.on('close',()=>{
	console.log('close stream done...')
})
