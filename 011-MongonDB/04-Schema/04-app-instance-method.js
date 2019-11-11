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
	userModle.insertMany({
		name:'peter',
		age:18,
		major:'music',
		phone:13839142989
	})
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err)
	})
	
	BlogModle.insertMany({
		title:'title 2',
		content:'content of titie 2',
		author:'5dc8eab8a9bbf82890ae965d'
	})
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err)
	})
	*/
	/*
	userModle.findOne({name:"tom"},(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			// console.log(docs)
			BlogModle.find({author:docs._id},(err,docs) =>{
				if(err){
					console.log(err)
				}else{
					console.log(docs)
				}
			})
		}
	})
	
	userModle.findOne({name:"tom"})
	.then(user =>{
	BlogModle.find({author:user._id},(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	  })
	})
	.catch(err =>{
		console.log(err)
	})
	*/
	userModle.findOne({name:"tom"})
	.then(user =>{
	  user.findBlogs((err,docs) =>{//调用自定义实例方法
	  	if(err){
	  		console.log(err)
	  	}else{
	  		console.log(docs)
	  	}
	  })
	})
	.catch(err =>{
		console.log(err)
	})
		
})