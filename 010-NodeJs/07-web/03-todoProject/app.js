const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json')
const server = http.createServer((req,res)=>{
	// console.log(req.url)
	//处理静态资源
	const filePath = req.url;
	//获取绝对路径，且用path.normalize方法进行规范化
	const fileName = path.normalize(__dirname+'	/static/'+req.url);
	//读取文件
	fs.readFile(fileName,{encoding:'utf-8'},(err,data)=>{
		if(err){
			res.setHeader('content-type','text/html;charset="utf-8"');
			res.statusCode = 404;
			res.end('<h1>你请求的地址出错了！</h1>');
		}else{
			//根据请求的文件决定不同的文档类型
			//获取后缀名，根据文档的后缀名决定文档的类型
			const extname = path.extname(req.url);
			mimeType = mime[extname];//text/html,text/css...
			res.setHeader('content-type',mimeType+';charset="utf-8"');
			res.end(data);
		}
	})
	
	// res.end('over....')
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in 127.0.0.1:3000 ')
})
