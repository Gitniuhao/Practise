const EventEmitter = require('events');
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
//和浏览器端不同，监听事件的第一个参数不是event对象，直接就是参数
emitter.on('show',(arg1,arg2)=>{
	console.log(arg1,arg2)
})
emitter.on('show',()=>{
	console.log('do something...')
})
//而触发时也不同，传入参数不用数组，直接传入参数列表就可以
// emitter.emit('show','10','55')
//当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。
const arr = ['15','58'];
emitter.emit('show',...arr)