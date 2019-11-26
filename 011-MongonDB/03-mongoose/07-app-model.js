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

	//引入模型(集合)
	const userModle = require('./model/user.js')

	//根据模型(集合)进行数据库操作
	userModle.find({age:{$lt:30}},(err,docs) =>	{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})
	
})