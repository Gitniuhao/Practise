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
	//根据文章名称获取文章全部内容以及作者的全部信息
	/*
	BlogModle.findOne({title:"title 1"})
	.then(data =>{
		// console.log(data)
		let result = {};
		result.data = data;
		userModle.find({_id:data.author},(err,docs)=>{
			if(err){
				console.log(err.message)
			}else{
				// console.log(docs)
				result.docs = docs;
				console.log(result)

			}
		})
	})
	.catch(err =>{
		console.log(err.message)
	})
	*/

	/*
	//关联查询的一般步骤
	BlogModle.findOne({title:"title 1"})
	.populate('author','name age -_id')
	//关联查询，第一个参数是关联词，第二个参数是决定那些参数显示隐藏
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err.message)
	})
	*/
	//调用自定义静态方法
	BlogModle.findByBlogs({title:"title 1"})
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err.message)
	})
})