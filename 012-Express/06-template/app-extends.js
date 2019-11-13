const express = require('express');
const app = express();
//swig模板就是主要用来渲染html页面的
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
//第一个参数必须是views
//第二个参数是模板存放的目录,即模板要运用到的保存有html文件的目录
app.set('views','./views')

//4.注册模板引擎
//第一个参数必须是view engine
//第二个参数是模板名称,也就是app.engine的一个参数,这两个参数必须保持一致
app.set('view engine','html')

//5.渲染模板
app.get('/',(req,res) =>{
//第一个参数是相对于模板目录下的html文件,不过扩展名.html可以省略,第一参数:index=index.html
//第二个参数是传递给模板的数据,即要在相应的html文件中要渲染的部分
	res.render('index')
})
app.get('/list',(req,res) =>{
	res.render('list')
})



app.listen(3000, ()=> console.log('Example app listening on port 3000!'))