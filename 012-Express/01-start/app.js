const express = require('express');
const app = express();
//127.0.0.1：3000/get:路由请求的方法
app.get('/',(req,res) => res.send('Hello Word!'))
app.listen(3000, ()=> console.log('Example app listening on port 3000!'))