//引入数据库
const mongoose = require('mongoose');
const moment = require('moment')
//链接数据库
mongoose.connect('mongodb://localhost/kuazhu',{useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;
db.on('err',function(err){
	console.log(err);
	throw err;
})
db.once('open',function(){
	console.log('connect success..');
	//引入模型
	const BlogModle = require('./models/blog.js')
	//根据模型(集合)进行数据库操作
	BlogModle.insertMany({
		title:"title1",
		content:"content of title1",
		//MongoDB会自动添加ObjectId的id,如果字段类型是ObjectId,插入时会把字符串转化为ObjectId
		author:"5dc7738ed036ab040ca9fe87"
	})
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err)
	})
		
})