/*
exports对象和module.exports对象是同一个对象
console.log(exports)
console.log(module.exports)
console.log(exports == module.exports)
*/

const str = 'choumeimei';
const obj = {
	name:'choudidi',
	age:15
}
const fn = function(){
	console.log('khbahksdbj')
}

console.log('require m5')
/*
//如果要添加属性来导出值,可以使用module.exports对象或者exports对象
exports.str = str;
exports.obj = obj;
exports.fn = fn;
*/
/*
module.exports.str = str;
module.exports.obj = obj;
module.exports.fn = fn;
*/

//虽然exports == module.exports，导出的始终是module.exports指向的对象,
//而且此时exports等于了另外一个对象，故此时在另一个文件拿不到
// exports = {
// 	str,
// 	obj,
// 	fn
// }

//如果要导出一个对象,只能使用module.exports对象,此时exports对象的值就不会被导出
module.exports = {
	str,
	obj,
	fn
}
