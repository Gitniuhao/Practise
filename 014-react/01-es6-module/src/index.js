//引用和执行模块：import
//如果多次引用模块，只会执行一次

// //写法一：引用的时候即使只有一个变量也要用花括号包括起来，固定写法
// import {a} from './Module.js';
// console.log('a=',a)
//import {a,b} from './Module.js';
// console.log('a=',a)
// console.log('b=',b)

//写法二：引用多个变量时，写在同一个括号里，用逗号隔开
// import {a,b} from './Module.js';
// console.log('a=',a)
// console.log('b=',b)

//写法三：引用变量时，import命令可以用as关键字改变变量的名称
// import {a as a1,b} from './Module.js';
// console.log('a1=',a1)
// console.log('b=',b)

//写法四：接收更改过的变量名
// import { a2,b } from './Module.js';
// console.log('a2=',a2)
// console.log('b=',b)

//写法五：
//接收export default导出的模块，变量名可以用任意合法的名称
//一个模块只能有一个默认输出，因此export default命令只能使用一次，所以import命令后才不用加大括号
import a,{b,c}from './Module.js';
console.log('a=',a)
console.log('b=',b)
console.log('c=',c)

console.log('here is a index file..')
