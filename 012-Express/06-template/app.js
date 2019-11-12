const express = require('express');
const app = express();
const swig = require('swig');

//处理静态资源
app.use(express.static('public'))

//模板引擎的使用：
//1.设置缓存,开发阶段设置不走缓存
swig.setDefaults({
	cache:false
})
//2.配置应用模板
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html',swig.renderFile);

//3.配置模板的存放目录
app.set('views','./views')
//4.注册模板引擎
app.set('view engine','html')
//5.渲染模板
app.get('/',(req,res) =>{
	res.render('index',{
		title:"test",
		name:'peter',
		age:18,
		firends:['amy','bob','peter','leo']
	})
})



app.listen(3000, ()=> console.log('Example app listening on port 3000!'))