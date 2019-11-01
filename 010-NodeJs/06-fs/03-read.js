const fs = require('fs');
/*
//逐步读文件
//1.打开文件
const fd = fs.openSync('./03-bb.txt','r');

//2.读取文件内容  fs.readSync(fd, buffer, offset, length, position)
//buffer代表了要有一个存数据的地方，offset代表了偏移位置，length代表了读取的长度，position代表了开始读取的位置
let buf = Buffer.alloc(50);
fs.readSync(fd,buf,0,20,0);
console.log(buf)

//3.关闭文件
fs.closeSync(fd);
*/

/*
//合并读文件  fs.readFileSync(path[, options])直接返回一个buffer对象
const buf = fs.readFileSync('./03-bb.txt',{flag:'r',encoding:'utf-8'})
console.log(buf)
*/


/*
//异步读取文件
//1.打开文件 fs.open(path[, flags[, mode]], callback)
fs.open('03-bb.txt','r',(err,fd)=>{
	if(err){
		console.log('open file fail..',err)
	}else{//2.读取文件内容 fs.read(fd, buffer, offset, length, position, callback)
		let buf = Buffer.alloc(50);
		fs.read(fd,buf,0,20,0,(err)=>{
			if(err){
				console.log('read file fail..')
			}else{
				console.log(buf)
			}
			//3.关闭文件
			fs.close(fd,(err)=>{
				if(err){
					console.log('close file fail...')
				}
			})
		})
	}
})
*/


/*
//合并异步读取文件 fs.readFile(path[, options], callback),不用存buffer,直接生成buffer
fs.readFile('03-bb.txt',{flag:'r',encoding:'utf-8'},(err,data)=>{
	if(err){
		console.log('read file fail..')
	}else{
		console.log(data)
	}
})
*/


//promise操作异步读取文件
const util = require('util');
const read = util.promisify(fs.readFile);//直接返回一个buffer对象，和一个promise对象
read('03-bb.txt',{flag:'r',encoding:'utf-8'})
.then(data =>{
	console.log(data)
})
.catch((err)=>{
	console.log(err)
})
