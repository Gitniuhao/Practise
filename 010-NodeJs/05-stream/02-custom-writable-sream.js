const { Writable } = require('stream');
// console.log(Writable);

class CustomWritable extends Writable{
//必须引入——write方法，因为Writable上本来没有write方法
////该函数不能被应用程序代码直接调用。 它应该由子类实现，且只能被内部的 Writable 类的方法调用。
//所有可写流的实现必须提供 writable._write() 和/或 writable._writev() 方法将数据发送到底层资源。
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
//只有调用end方法，'finish'事件才能被触发，即且缓冲数据都已传给底层系统之后触发。
write.on('finish',()=>{
	console.log('write finish...')
})
//用 writable.end() 表明已没有数据要被写入可写流
write.end('end',()=>{
	console.log('write end...')
})
