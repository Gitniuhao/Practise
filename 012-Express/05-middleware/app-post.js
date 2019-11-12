const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//处理静态资源
app.use(express.static('public'))

//中间件的配置代码
// 解析urlencode内容
app.use(bodyParser.urlencoded({ extended: false }))

// 解析json
app.use(bodyParser.json())

app.post('/',(req,res) => {
	/*把req当作可读流，进行接收，不过获取到的是字符串
	let body = '';
	req.on('data',(chunk) =>{
		body += chunk;
	})
	req.on('end',()=>{
		console.log(body)	
	})
	*/
	//利用body-parser中间件，将获取到的参数转换为对象
	console.log(req.body)
	res.send('Post the data of user...')
})



app.listen(3000, ()=> console.log('Example app listening on port 3000!'))