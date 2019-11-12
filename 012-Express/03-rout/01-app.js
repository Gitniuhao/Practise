const express = require('express');
const app = express();
//app.use(express.static(静态资源目录));
//所有的静态资源的请求路径都是相对于静态资源目录,静态资源目录要一致
//如果是文件夹，则直接请求文件夹下的index.html
//如果请求资源时用根目录请求，会优先加载首页，而加载后不再继续请求
app.use(express.static('public'))

//app.use('虚拟路径',express.static(静态资源目录))
//设置了虚拟路径后，静态资源请求时要加上虚拟路径
//虚拟路径时根本不存在的目录
// app.use('/static',express.static('public'))

//路由请求方法
//路由结构：app.method.('path',handler);path:路径，handler:当路由匹配到时需要使用的回调函数
app.get('/get',(req,res) => res.send('Get the data...'))//查询
app.put('/put',(req,res) => res.send('Put the data...'))//新增
app.post('/post',(req,res) => res.send('Post the data...'))//修改
app.delete('/delete',(req,res) => res.send('Delete the data...'))//删除

app.listen(3000, ()=> console.log('Example app listening on port 3000!'))