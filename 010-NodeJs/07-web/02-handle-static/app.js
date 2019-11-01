const http = require('http');
const path = require('path');
const fs = require('fs')
const server = http.createServer((req,res)=>{
	// console.log(req.url)
	//处理静态资源
	const filePath = req.url;
	//获取绝对路径，且用path.normalize方法进行规范化
	const fileName = path.normalize(__dirname+req.url);
	//读取文件
	fs.readFile(fileName,{encoding:'utf-8'},(err,data)=>{
		if(err){
			// res.setHeader('content-type',)
			res.end('<h1>你请求的地址出错了！</h1>')
		}else{
			res.end(data)
		}
	})
	
	// res.end('over....')
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in 127.0.0.1:3000 ')
})
