//模块标识可以是绝对路径也可以是相对路径
//用相对路径时注意,当前目录一定要写“./”,否则表明要加载系统的核心模块
// const req = require('./m5-exports.js')
//用绝对路径的话系统会直接加载路径指定的文件	
const req = require('E:/WEB/Practise/010-NodeJs/001-module/03-document/m5-exports.js')
console.log(req)