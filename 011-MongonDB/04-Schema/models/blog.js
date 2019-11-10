const mongoose = require('mongoose');

	//1.定义文档模型
	const BlogSchema = new mongoose.Schema({
		title:{
			type:String
		},
		content:{
			type:String
		},
		author:{
			type:mongoose.Schema.Types.ObjectId
		}
	})
	//2.根据文档模型生成对应模型(集合)，也是一个类
	//第一个参数是需要生成的集合名称，第二个参数是需要用到的文档模型
	const BlogModle = mongoose.model('Blog',BlogSchema)

module.exports = BlogModle;