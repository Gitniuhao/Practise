//引入数据库
const mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/kuazhu',{ useUnifiedTopology: true, useNewUrlParser: true });


let getRandom = (min,max)=>{
	return Math.round(min+Math.random()*(max-min))
}
const names = ["tom","bob","amy","peter"];
const majors = ["computer","art","music","math"];

let getNames = ()=>names[getRandom(0,names.length-1)];
let getMajors = ()=>majors[getRandom(0,majors.length-1)];

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
	//3.1新增
	/*
	const user = new userModle({name:"tom",age:18,major:"computer"})
	user.save()//因为model实例对象的save的方法最后返回的是一个promise实例对象，所以：
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err)
	})
	*/
	/*直接调用userModle这个类上面的静态方法：insertMany方法
	userModle.insertMany([{name:"bob",age:20,major:"art"},{name:"peter",age:22,major:"math"}],(err,docs)=>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	 //静态方法insertMany最后返回的也是一个promise实例，故可以调用其方法处理回调
	//如果插入多条数据，直接全部插入
	userModle.insertMany([{name:"bob",age:20,major:"art"},{name:"peter",age:22,major:"math"}])
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err)
	})
	//静态方法create的用法和人Insert相同，最后返回promise实例
	//不过其插入多条数据时会把数据一条一条的逐步插入
	userModle.create([{name:"bob",age:20,major:"art"},{name:"peter",age:22,major:"math"}])
	.then(data =>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err)
	})
	*/
	let arr =[];
	for(var i=0;i<40;i++){
		arr.push({
			name:getNames(),
			age:getRandom(20,80),
			major:getMajors()
		})

	}
	userModle.insertMany(arr)
	.then(data=>{
		console.log(data)
	})
	.catch(err =>{
		console.log(err)
	})

})