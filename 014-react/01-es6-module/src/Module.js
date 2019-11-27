//定义和导出模块：export
//写法一：导出模块时可以后面直接跟定义变量的语句，导出模块时可以写多个export.可以同时导出
// export const a = 1;
// export const b = 1;

//写法二：当变量比较多的时候，可以先进行变量的声明，然后直接导出一个对象，把所有变量写进对象中
// const a = 1;
// const b = 1;
// export{
// 	a,
// 	b
// }

//写法三：	
// const a = 1;
// const b = 1;
// export{
// 	a,
// 	b
// }

//写法四：在导出模块时可以用as关键字进行更改变量名，接收时接收更改过的变量名	
// const a = 1;
// const b = 1;
// export{
// 	a as a2,
// 	b
// }

//写法五：
//直接导出一个值
// export default 1

//因为export default导出的是一个叫default的变量名，所以其后面不能跟变量声明语句
//export default const a = 1

//变量声明只会，导出变量
const a = 1;
export default a
export const b = 2;
export const c = 3;