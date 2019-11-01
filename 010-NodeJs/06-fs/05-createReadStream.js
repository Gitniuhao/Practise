const fs = require('fs');
//1.打开可读流；2.读取可读流内容；3结束读取；

const rs = fs.createReadStream('./04-ws.txt');
rs.on('data',(chunk)=>{
	console.log(chunk)
})
rs.on('end',()=>{
	console.log('end..')
})
rs.on('close',()=>{
	console.log('close stream done...')
})
