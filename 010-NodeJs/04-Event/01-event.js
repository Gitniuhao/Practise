//EventEmitter是一个构造函数/类
const EventEmitter = require('events');//返回的是一个类
// console.log(EventEmitter)
//Node中的event没有默认行为和事件冒泡
//大多数 Node.js 核心对象都继承事件类，因为Node.js内部大多数靠事件驱动
// 此时用一个构造函数继承事件触发器，是为了不仅能用事件触发器的方法，也能有自己的方法使用
class MyEmitter extends EventEmitter{

}
//1.生成一个事件触发器实例实例
const emitter = new MyEmitter();
//2.监听事件
emitter.on('event', () => {
  console.log('bind event');
});
emitter.on('test',()=>{
	console.log('test...')
})
//3.触发事件
emitter.emit('event');
emitter.emit('test')