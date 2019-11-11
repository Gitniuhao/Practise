const mongoose = require('mongoose');

	//1.定义文档模型
	const userSchema = new mongoose.Schema({
		name:{//内置验证：validation,所有的类型都有required(必须)验证 
			//每一个验证都可以写为: 规则:[值,错误消息]的格式,也可以写为:规则:值
			type:String,
			required:[true,'必须输入姓名'],
			//,maxlength(最大长度)和minlength(最小长度)验证.一个汉字占一位
			minlength:[3,'最少不能低于三位'],
			maxlength:[8,'最多不能高于8位']
		},
		age:{//在存储数据时，如果数据类型和定义字段的类不一样，mogoose内部会尝试将数据转换为定义的字段类型，如果转换失败则操作失败
			type:Number,
			requied:[true],
			//Number类型有min(最小)和max(最大)值验证
			min:[18,'年龄最低不能低于18岁'],
			max:[30,'年龄最大不能高于30岁']
		},
		major:{
			type:String,
			required:[true],
			//String有enum(枚举)
			enum:['math','computer','music']
		},
		isAdim:{
			type:Boolean
		},
		createAt:{//定义类型的方法有两种，一种是直接用类型，另一种是用一个对象，类型是对象type属性的值
				//用对象时还可以指定默认值default
			type:Date,
			default:Date.now()
		},
		firends:{
			type:Array
		},
		phone:{
			type:Number,
			validate:{//自定义验证
				validator:(val) =>{
					return /1[3578]\d{9}/.test(val)
				},
				message:'您的手机号不符合要求...'
			}
		}
	})
	//自定义实例方法(stance methods):因为方法中要用到调用方法的实例(集合)，
	//所以不能用箭头函数
	userSchema.methods.findBlogs = function(callback){
		// console.log(this)
		// console.log(this.model('blog'))
		//调用实例方法model方法可以直接引入模型(集合)，返回一个model,直接可以在集合寻找满足条件的文档
		//Model.prototype.model()
		this.model('blog').find({author:this._id},callback)
	}

	//自定义静态方法
	userSchema.statics.findByPhone = function(val,callback){
		// console.log(this)
		//静态方法：Model.model(),也是返回一个model
		this.findOne({phone:val},callback)
	}

	//2.根据文档模型生成对应模型(集合)，也是一个类
	//第一个参数是需要生成的集合名称，第二个参数是需要用到的文档模型
	const userModle = mongoose.model('user',userSchema)

module.exports = userModle;
