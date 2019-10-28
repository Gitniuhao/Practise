// console.log(global);
//2.在另一个文件里引入上一个在global上添加传递值的文件，使得两个文件之间产生关联
require('./m3.js');
//3.在另一个文件使用上一个文件传递的值
console.log(global.str)