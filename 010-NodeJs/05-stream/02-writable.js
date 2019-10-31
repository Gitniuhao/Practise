const { Writable } = require('stream');
// console.log(Writable);

class CustomWritable extends Writable{
	_write(chunk,encoding,callback){
		console.log('chunk:',chunk)
		console.log('encoding:',encoding)
		callback();
	}
}
const write = new CustomWritable();
write.write('hello',()=>{
	console.log('write hello...')
})
write.on('finish',()=>{
	console.log('write finish...')
})
write.end('end',()=>{
	console.log('write end...')
})
