const express = require('express');
const app = express();
//app.use(express.static(静态资源目录));
//所有的静态资源的请求路径都是相对于静态资源目录,静态资源目录要一致
//如果是文件夹，则请求文件夹下的index.html
//如果请求资源时用根目录请求，会优先加载首页，而加载后不再继续请求
app.use(express.static('public'))

//app.use('虚拟路径',express.static(静态资源目录))
//设置了虚拟路径后，静态资源请求时要加上虚拟路径
// app.use('/static',express.static('public'))

//路由请求方法
app.all('/',(req,res,next) =>{
	console.log('always do something..');
	next();
})
//res.end返回处理结果(字符串，也可以解析字符串中的HTML代码)
// app.get('/',(req,res) => res.end('Get the data...'))
// app.get('/',(req,res) => res.end('<h1>HTML CSS JS</h1>'))
// app.get('/',(res,req) => res.end({name:"tom"}))//不可以返回字符串
// app.get('/',(req,res) => res.end('{name:"tom"}'))

//res.json能够返回对象，字符串，但是不能解析字符串中的HTML代码
// app.get('/',(req,res) => 
	// res.json({
	// name:"tom",
	// age:20
	// })
	// res.json('Get the data...')
	// res.json('<h1>HTML CSS JS</h1>')
	// )
//res.send能返回各种数据类型
// app.get('/',(req,res) => res.send('<h1>HTML CSS JS</h1>'))
// app.get('/',(req,res) => res.send('getbchbsc'))
app.get('/',(req,res) => res.send({
	name:"age",
	age:20
}))

app.listen(3000, ()=> console.log('Example app listening on port 3000!'))