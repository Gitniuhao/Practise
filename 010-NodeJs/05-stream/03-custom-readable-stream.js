const { Readable } = require('stream');

class CustomReadable extends Readable {
	constructor(){
		super();
		this.index = 0;
	}
	//所有可读流的实现必须提供 readable._read() 方法从底层资源获取数据。
	//该函数不能被应用程序代码直接调用。 它应该由子类实现，且只能被内部的 Readanle	 类的方法调用。
	_read(){
		this.index ++;
		//传递的数据必须是字符串或buffer数据,所以需要转换数据
		if(this.index < 5){
//当 readable._read() 被调用时，如果从资源读取到数据，则需要开始使用 readable.push/this.push(dataChunk) 推送数据到读取队列			
			this.push(this.index + "")
		}else{//空的数据（例如空的 buffer 和字符串）将不会导致 readable._read() 被调用。
			this.push(null);
		}

	}
}
const reader = new CustomReadable();

/*
//定义一个变量存数据
let body = '';
//监听data事件获取数据，'data'事件用于接收数据， 数据将会在可用时立即传递。
reader.on('data',(chunk)=>{
	console.log(chunk)
	body += chunk;
})
//获取数据完毕监听end事件，'end'事件表明数据传输完毕，直接可以拿到数据
reader.on('end',()=>{
	console.log(body)
})
*/

//readable.pipe(writable) 将可读流的数据传递给可写流
reader.pipe(process.stdout)