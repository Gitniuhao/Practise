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
//mongoodb会自动添加objectid 的id,如果字段类型是objectid,插入时会把字符串转换为objectid
			type:mongoose.Schema.Types.ObjectId,
			ref:'user'//ref:"",表示关联映射到哪一个集合
		}
	})

	//自定义静态方法
	BlogSchema.statics.findByBlogs = function(query){
		//要返回一个promise实例
		return this.findOne(query).populate('author','name age -_id');
	}


	//2.根据文档模型生成对应模型(集合)，也是一个类
	//第一个参数是需要生成的集合名称，第二个参数是需要用到的文档模型
	const BlogModle = mongoose.model('blog',BlogSchema)

module.exports = BlogModle;