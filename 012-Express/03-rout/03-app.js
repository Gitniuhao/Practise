const express = require('express');
const app = express();
//app.use(express.static(静态资源目录));
//所有的静态资源的请求路径都是相对于静态资源目录,静态资源目录要一致
//如果是文件夹，则请求文件夹下的index.html
//如果请求资源时用根目录请求，会优先加载首页(index.html)，而加载后不再继续请求
app.use(express.static('public'))//而如果要让页面不优先请求首页，文件夹下就不能有index.html文件，可以改名

//app.use('虚拟路径',express.static(静态资源目录))
//设置了虚拟路径后，静态资源请求时要加上虚拟路径
// app.use('/static',express.static('public'))

//路由请求方法

//get/delete方法处理参数适用：req.query/req.params

// /?name:tom&age:20
app.get('/',(req,res) => {
	//通过req.query将参数转换成对象，便于处理，处理路由：'/'
	console.log(req.query)
	res.send('Get the data...')
})

// /users/123/books/456
// /users/:userId/books/:bookId
app.get('/users/:userId/books/:bookId',(req,res) =>{
	//通过req.params将参数转换成对象，便于处理,处理路由：'/users/:userId/books/:bookId'
	console.log(req.params)
	res.send('get the data...')
})
 
app.listen(3000, ()=> console.log('Example app listening on port 3000!'))