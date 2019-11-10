const mongoose = require('mongoose');

	//1.定义文档模型
	const userSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})
	//2.根据文档模型生成对应模型(集合)，也是一个类
	//第一个参数是需要生成的集合名称，第二个参数是需要用到的文档模型
	const userModle = mongoose.model('user',userSchema)

module.exports = userModle;