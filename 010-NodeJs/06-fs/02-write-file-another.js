const fs = require('fs');
const util = require('util');
/*
//逐步操作
//1.打开文件 fs.open(path[, flags[, mode]], callback)
fs.open('./01-aa.txt','w',(err,fd) =>{
	if(err){
		console.log('open file fail...')
	}else{//2.写入文件 fs.write(fd, string[, position[, encoding]], callback)
		fs.write(fd,'臭弟弟',(err) =>{
			if(err){
				console.log('write file fail....')
			}else{//3.保存并退出 fs.close(fd,callback)
				fs.close(fd,(err) =>{
					if(err){
						console.log('close file fail...')
					}					
				})
			}
		})
	}
})
*/

/*
//合并操作  fs.writeFile(file, data[, options], callback)
fs.writeFile('./01-aa.txt','你可真是秀！',{flag:'a'},(err) =>{
	if(err){
		console.log(err)
	}
})
*/

//promise操作异步写文件

const writefile = util.promisify(fs.writeFile);//返回一个promise实例，遵循异常优先的回调风格的函数
writefile('./01-aa.txt',',秀的我头皮发麻。。',{flag:'a'})
.then(()=>{
	console.log('write file success...')
})
.catch((err)=>{
	console.log('write file fail...')
})