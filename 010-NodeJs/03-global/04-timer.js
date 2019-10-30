/*
const timer1 = setTimeout(function(){
	console.log('t1..')
},0)
// clearTimeout(timer1)
console.log('after t1..')

setInterval(function(){
	console.log('t2..')
},100)

console.log('after t2..')

//setImmediate()表示同步事件执行结束后立即执行，但是它也有一个时间的延迟，
//相比较延迟定时器的延迟时间较短的话，就没有延迟性定时器执行的快
setImmediate(function(){
	console.log('t3..')
})

console.log('after t3...')
 //after t1..
// after t2..
// after t3...
// t1..
// t3..
// t2.........
*/

const timer1 = setTimeout(function(){
	console.log('t1..')
},0)
// clearTimeout(timer1)
/*
它是一个异步程序，当同步程序执行完毕之后，会立马执行这个异步程序
process.nextTick(callback) 方法将 callback 添加到下一个时间点的队列。
 一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。
*/
process.nextTick(callback =>{
	console.log('t4')
})
console.log('after t1..')
