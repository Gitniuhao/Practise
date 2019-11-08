//引入数据库
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url, { useUnifiedTopology: true });
//链接数据库
client.connect(err =>{
	if(err){
		console.log('connect DB fail..');
		throw err
	}
	console.log('connect DB success..')
	//1.切换数据库，没有的话则新建
	const db = client.db('IT');
	//2.切换集合，没有的话则创建
	const collection = db.collection('user')
	// console.log(collection)
	//3.根集合进行数据库操作：CRDU
	/*
	//3.1新增
	collection.insertMany([{name:"tom",age:18},{name:"peter",age:20}],(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
		//不管成功或失败，都要关闭链接
		client.close();
	})
	//3.2查询
	collection.findOne({age:{$lt:18}},(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
		//不管成功或失败，都要关闭链接
		client.close();
	})
	
	//3.3更新
	collection.updateOne({age:18},{$set:{age:50}},(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
		//不管成功或失败，都要关闭链接
		client.close();
	})
	*/
	
	//3.4删除
	collection.deleteOne({age:18},(err,docs) =>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
		//不管成功或失败，都要关闭链接
		client.close();
	})

})