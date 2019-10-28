function (exports, require, module, __filename, __dirname) {
	console.log(arguments.callee +"")
}
//这就是模块的本质：一个文件就是一个模块，而一个模块本质上就是一个函数，打印的这句话本质上就是在函数中运行

