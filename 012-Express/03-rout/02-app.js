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
//不是一个具体的http请求,代表所有的请求,“主要用来加载中间件”,有all请求的话，会先进行all请求
//且一般要在all中调用next方法，让程序继续往下执行
app.all('/',(req,res,next) =>{
	console.log('always do something..');
	next();
})
app.get('/',(req,res) => res.send('Get the data...'))
app.put('/',(req,res) => res.send('Put the data...'))
app.post('/',(req,res) => res.send('Post the data...'))
app.delete('/',(req,res) => res.send('Delete the data...'))

app.listen(3000, ()=> console.log('Example app listening on port 3000!'))