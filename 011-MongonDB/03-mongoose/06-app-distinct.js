//引入数据库
const mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/kuazhu',{useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;
db.on('err',function(err){
	console.log(err);
	throw err;
})
db.once('open',function(){
	console.log('connect success..');
	//1.定义文档模型
	const userSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})
	//2.根据文档模型生成对应模型(集合)，也是一个类
	//第一个参数是需要生成的集合名称，第二个参数是需要用到的文档模型
	const userModle = mongoose.model('user',userSchema)
	//3.根据模型(集合)进行数据库操作
	//获取去重后的值
	/*
	userModle.distinct('major',(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})*/
	//filed:所要去重的部分
	//[conditions]:限制条件，可写可不写
	//callback,回调函数
	userModle.distinct('major',{age:{$lt:24}},(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})
})