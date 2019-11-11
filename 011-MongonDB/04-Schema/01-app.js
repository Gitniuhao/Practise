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
	//根据模型(集合)进行数据库操
	/*
	userModle.insertMany({name:"leo",age:19,major:"music"},(err,docs) =>{
		if(err){
			console.log(err)
		}else{//MongoDB存储的是格林尼治标准时间(GMT时间),和们的时区错8个小时,存储时会减去8小时
			//以上两种方法都可以格式化时间，转换成合适的标准的合适的时间
			console.log((docs.createAt).toLocaleString())
			//moment需要下载moment依赖，然后引进调用方法
			// console.log(moment(docs.createAt,).format('YYYY - MM - DD HH:mm:ss'))
		}
	})
	*/
	userModle.findOne({name:"leo",age:19,major:"music"},(err,docs) =>{
		if(err){
			console.log(err)
		}else{//MongoDB存储的是格林尼治标准时间(GMT时间),和们的时区错8个小时,存储时会减去8小时
			//以上两种方法都可以格式化时间，转换成合适的标准的合适的时间
			console.log(docs.createAt.toLocaleString())
			//moment需要下载moment依赖，然后引进调用方法
			// console.log(moment(docs.createAt,).format('YYYY - MM - DD HH:mm:ss'))
		}
	})
})