//用来处理数据，比如获取数据，添加数据，删除数据等
const fs = require('fs');
const path = require('path');
const util = require('util');
const filepath = path.normalize(__dirname+'/../data/item.json');


//异步处理读取文件获取数据
const readFile = util.promisify(fs.readFile);
async function get(){
	//1.读取文件数据
	const data = await readFile(filepath,{flag:'r',encoding:'utf-8'})
	//2.返回数据
	const arr = JSON.parse(data);
	return arr;
}


//异步处理读取文件获取数据
const writeFile = util.promisify(fs.writeFile);
async function add(task){
	//1.读取文件获取数据
	const data = await readFile(filepath,{flag:'r',encoding:'utf-8'}) 
	//2.将字符串数据转换成数组
	const arr = JSON.parse(data);
	//3.生成任务对象并将其添加到数组中(时间托)
	const obj = {
		id:Date.now().toString(),
		task:task
	}
	arr.push(obj);
	//4.再将数组转换成字符串写入文件覆盖原来的内容
	await writeFile(filepath,JSON.stringify(arr))
	//5.返回任务对象
	return obj;
}

//异步处理删除文件
async function del(id){
	//1.读取文件获取数据
	const data = await readFile(filepath,{flag:'r',encoding:'utf-8'})
	//2.将字符串数据转换成数组
	const arr = JSON.parse(data);
	//3.根据id将数组中对应的对象数据删除\
	const newArr = arr.filter(function(item){
		// console.log(item)
		return item.id != id;
	})
	//4.再将数组转换成字符串写入文件覆盖原来的内容
	await writeFile(filepath,JSON.stringify(newArr));
}
module.exports = {
	get,
	add,
	del
}