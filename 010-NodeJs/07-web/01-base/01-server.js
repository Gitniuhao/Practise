const http = require('http');
const server = http.createServer((req,res)=>{
	//req:request,请求，是一个可读流
	//res:responde,回应，响应，是一个可写流
	console.log(req.url);
	console.log(req.method)
	res.write('plmm!')
	res.end('over....')
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in 127.0.0.1:3000 ')
})
//输入域名就相当于输入ip地址，他们是相等的