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
process.nextTick(callback =>{
	console.log('t4')
})
console.log('after t1..')
