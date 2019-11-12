const express = require('express');
const app = express();
//4.引入router对象
const userRouter = require('./routes/user.js')
const blogRouter = require('./routes/blog.js')
//处理静态资源
app.use(express.static('public'))

/*
app.get('/user',(req,res) => res.send('Get the data of user...'))//查询
app.put('/user',(req,res) => res.send('Put the data of user...'))//新增
app.post('/user',(req,res) => res.send('Post the data of user...'))//修改
app.delete('/user',(req,res) => res.send('Delete the data of user...'))//删除
*/
//5.用app.use('path',router对象)来使用导入的router对象
app.use('/user',userRouter)	
/*
app.get('/blog',(req,res) => res.send('Get the data of blog...'))//查询
app.put('/blog',(req,res) => res.send('Put the data of blog...'))//新增
app.post('/blog',(req,res) => res.send('Post the data of blog...'))//修改
app.delete('/blog',(req,res) => res.send('Delete the data of blog...'))//删除
*/
app.use('/blog',blogRouter)

app.listen(3000, ()=> console.log('Example app listening on port 3000!'))