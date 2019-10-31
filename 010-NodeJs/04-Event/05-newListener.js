const EventEmitter = require('events');
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
//'newListener'事件,当有新的监听事件被添加到同一个实例对象上会自动触发这个事件,其回调函数接受两个参数
//分别是添加的事件名称和函数
emitter.on('newListener',(eventName,callback)=>{
	console.log('newListener excuate...')
	console.log('eventName:',eventName);
	//如果有callback,就执行callback;
	callback && callback();
})

emitter.on('show',()=>{
	console.log('show1...')
})
emitter.on('shon',()=>{
	console.log('shown...')
})