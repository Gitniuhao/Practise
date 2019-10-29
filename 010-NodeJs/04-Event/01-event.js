const EventEmitter = require('events');
console.log(EventEmitter)

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter();

emitter.on('event', () => {
  console.log('触发事件');
});

emitter.emit('event');