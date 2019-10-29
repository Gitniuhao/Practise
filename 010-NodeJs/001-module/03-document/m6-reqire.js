/*
const req = require('./m5-exports.js');
console.log(req);
console.log(req.str)
console.log(req.obj)
console.log(req.fn)
*/
//在这里可以利用对象的结构解析，将等号右边对象中的同名属性的值赋给等号左边的属性
const { str,obj,fn } = require('./m5-exports.js');
console.log(str)
console.log(obj)
console.log(fn)