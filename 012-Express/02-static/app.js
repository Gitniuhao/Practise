const express = require('express');
const app = express();
//app.use(express.static(静态资源目录));
//所有的静态资源的请求路径都是相对于静态资源目录,静态资源目录要一致
//如果是文件夹，则请求文件夹下的index.html
// app.use(express.static('public'))

//app.use('虚拟路径',express.static(静态资源目录))
//设置了虚拟路径后，静态资源请求时要加上虚拟路径
app.use('/static',express.static('public'))

app.get('/',(req,res) => res.send('Hello Word!'))
app.listen(3000, ()=> console.log('Example app listening on port 3000!'))