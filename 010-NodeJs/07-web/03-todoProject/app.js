const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json')
const url = require('url');
const swig = require('swig');
const querystring = require('querystring');
//引入处理数据的方法
const { get,add,del } = require('./model/item.js')


const server = http.createServer((req,res)=>{
	// console.log(req.url)
	//获取静态资源所需要的路径
	const filePath = req.url;
	//把字符串转换为一个对象
	const parse = url.parse(req.url,true);
	//从而获得只需要的最后的请求地址
	const pathname = parse.pathname;


	//路由：根据不同的请求地址处理不同的逻辑
	//处理首页请求
	if(pathname == '/' || pathname == '/index.html'){
		//获取数据
		get()
		.then(arr =>{
			// console.log(result)
			//获取绝对路径，且用path.normalize方法进行规范化
			const fileName = path.normalize(__dirname+'/static/index.html');
			const template = swig.compileFile(fileName);
			const html = template({
				data:arr
			})
			res.setHeader('content-type','text/html;charset="utf-8"');
			res.end(html);
		})
		.catch(err =>{
			res.setHeader('content-type','text/html;charset="utf-8"');
			res.statusCode = 404;
			res.end('<h1>你请求的地址出错了！</h1>');
		})
	}else if(pathname == '/add'){//处理add请求
		//1.获取数据参数
		let body = '';
		req.on('data',(chunk) =>{
			body += chunk;
		})
		req.on('end',() =>{
			//2.将数据参数转换为任务对象写入文件，便于获取:querystring.parse()=>将字符串转换成对象
			const query = querystring.parse(body);
			add(query.task)
			.then(data =>{
				//3.将获取到的任务对象返回前端进行处理
				res.end(JSON.stringify({
					code:0,
					massage:'添加数据成功',
					data:data
				}))
			})
			.catch(err =>{
				res.end(JSON.stringify({
					code:1,
					massage:'添加数据失败',
					data:err
				}))
			})
		})
		
	}else if(pathname == '/delete'){//处理delete请求
		//1.获取到每个li的对象的id参数
		const id = parse.query.id;
		//2.根据id进行对后台相应文件进行删除操作
		del(id)
		.then(data =>{
			res.end(JSON.stringify({
				code:0,
				massage:'删除数据成功'
			}))
		})
		.catch(err =>{
			res.end(JSON.stringify({
				code:1,
				massage:'删除数据失败'
			}))
		})
	}else{//处理静态资源(index.css/index.js/jquery)
		//获取绝对路径，且用path.normalize方法进行规范化
		const fileName = path.normalize(__dirname+'/static/'+filePath);
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
	}
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in 127.0.0.1:3000 ')
})
