const express = require('express');
const app = express();

//处理静态资源
app.use(express.static('public'))

//中间件的用法
//中间件其实就是一个函数，一般都是app.use('path',fn)，在收到请求和返回响应之间处理一些操作，这个函数可以访问请求对象(req),
//相应对象(res); 如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个
//中间件，否则请求就会挂起； next()代表中间件数组中的下一个函数，在express内部有一个专门存放发出
//响应之前要执行的所有函数的数组,即中间件数组,每次执行app.use(fn)都会把函数添加到数组中
app.use('/',(req,res,next) =>{
	console.log('do something of taskA')
	next();
})
app.use('/',(req,res,next) =>{
	console.log('do something of taskB')
	next();
})
app.get('/',(req,res) => res.send('Get the data of user...'))//查询
app.put('/',(req,res) => res.send('Put the data of user...'))//新增
app.post('/',(req,res) => res.send('Post the data of user...'))//修改
app.delete('/',(req,res) => res.send('Delete the data of user...'))//删除


app.listen(3000, ()=> console.log('Example app listening on port 3000!'))