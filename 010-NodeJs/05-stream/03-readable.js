const { Readable } = require('stream');

class CustomReadable extends Readable {
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index ++;
		if(this.index < 5){
			this.push(this.index + "")
		}else{
			this.push(null);
		}

	}
}
const reader = new CustomReadable();
//定义一个变量存数据
let body = '';
reader.on('data',(chunk)=>{
	console.log(chunk)
	body += chunk;
})
reader.on('end',()=>{
	console.log(body)
})

// readable.pipe(process.stdout)