const EventEmitter = require('events');
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();

const listener1 = ()=>{
	console.log('bind show1.....')
}
const listener2 = ()=>{
	console.log('bind show2然后.....')
}
emitter.on('show',listener1)
emitter.on('show',listener2)
//移除事件，第一个参数为事件名，第二个参数为函数的名字
// emitter.removeListener('show',listener1)
emitter.off('show',listener1)

emitter.emit('show')