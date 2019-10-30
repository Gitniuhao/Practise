const EventEmitter = require('events');
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
//,而且在Node中他们都
//可以绑定多个同名事件，而且只需要触发一次
/*
//1.on监听事件
emitter.on('test',()=>{
	console.log('test1..')
})
emitter.on('test',()=>{
	console.log('test2..')
})

//2.addlister监听事件
emitter.addListener('test',()=>{
	console.log('test3..')
})
emitter.addListener('test',()=>{
	console.log('test4..')
})
emitter.emit('test')
//emitter.addListener和emitter.on(eventName, listener)是同一个方法
console.log(emitter.on == emitter.addListener)
// emitter.emit('test')

//3.once监听事件
emitter.once('testonce',()=>{
	console.log('test once..')
})
//只会执行一次的函数
emitter.emit('testonce')
emitter.emit('testonce')
*/

//一个EventEmitter对象默认最大可以有10个监听,
//可以通过emitter.setMaxListeners(n)来设置最大监听数
emitter.setMaxListeners(20);
emitter.addListener('test',()=>{
	console.log('test1..')
})
emitter.addListener('test',()=>{
	console.log('test2..')
})
emitter.addListener('test',()=>{
	console.log('test3..')
})
emitter.addListener('test',()=>{
	console.log('test4..')
})
emitter.addListener('test',()=>{
	console.log('test5..')
})
emitter.addListener('test',()=>{
	console.log('test6..')
})
emitter.addListener('test',()=>{
	console.log('test7..')
})
emitter.addListener('test',()=>{
	console.log('test8..')
})
emitter.addListener('test',()=>{
	console.log('test9..')
})
emitter.addListener('test',()=>{
	console.log('test10..')
})
emitter.addListener('test',()=>{
	console.log('test11..')
})
emitter.emit('test')