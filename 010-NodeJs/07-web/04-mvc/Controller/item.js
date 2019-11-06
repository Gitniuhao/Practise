const path = require('path');
const swig = require('swig');
const querystring = require('querystring');
const { get:getItem,add:addItem,del:delItem } = require('../model/item.js')
class Controller{
	index(req,res,...args){
	//获取首页数据
		getItem()
		.then(arr =>{
			// console.log(result)
			//获取绝对路径，且用path.normalize方法进行规范化
			const fileName = path.normalize(__dirname+'/../view/index.html');
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
	}
	add(req,res,...args){
		//1.获取数据参数
		let body = '';
		req.on('data',(chunk) =>{
			body += chunk;
		})
		req.on('end',() =>{
			//2.将数据参数转换为任务对象写入文件，便于获取:querystring.parse()=>将字符串转换成对象
			const query = querystring.parse(body);
			addItem(query.task)
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
	}
	delete(req,res,...args){
		//1.获取到每个li的对象的id参数
		const id =args[0];
		//2.根据id进行对后台相应文件进行删除操作
		delItem(id)
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
	}
}
module.exports = new Controller();