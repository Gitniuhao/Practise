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
	const userModle = require('./models/user.js')
	const BlogModle = require('./models/blog.js')
	//根据模型(集合)进行数据库操作
	
	/*
	userModle.findById("5dc8eab8a9bbf82890ae965d",(err,user) =>{
		if(err){
			console.log(err)
		}else{
			console.log(user)
		}
	})*/
	//调用自定义静态方法
	userModle.findByPhone(17839142787,(err,user) =>{
		if(err){
			console.log(err)
		}else{
			console.log(user)
		}
	})
		
})