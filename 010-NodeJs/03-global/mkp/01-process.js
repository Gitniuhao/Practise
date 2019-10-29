// console.log(process)
// console.log(global.process)
//process 和 global.process是同一个对象
console.log(process == global.process)
//process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
console.log(process.argv)
// console.log(process.argv[2])
console.log(process.env)
console.log(process.pid)