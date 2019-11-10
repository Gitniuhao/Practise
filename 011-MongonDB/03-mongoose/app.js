//引入数据库
const mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/kuazhu',{ useUnifiedTopology: true,useNewUrlParser: true });

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
	//2.根据文档模型生成对应模型(集合)
	//第一个参数是需要生成的集合名称，第二个参数是需要用到的文档模型
	const userModle = mongoose.model('user',userSchema)
	//3.根据模型(集合)进行数据库操作
	//3.1新增
	/*
	const user = new userModle({name:"tom",age:18,major:"computer"})
	user.save((err,docs)=>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})*/
	/*
	// //3.2查询
	 userModle.findOne({name："bob"},(err,docs){
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})
	//3.3更新
	userModle.updateOne({name:"bob"},{$set:{age:25}},(err,docs){
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})
	//3.4删除
	userModle.deleteOne({name:"bob"},(err,docs){
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})

})