//代表控制台的可读流,可读流中会把换行符和回车键都转换成buffer数据
process.stdin.on('data',(chunk) =>{
	console.log(chunk)
})