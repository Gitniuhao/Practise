const path = require('path')
module.exports = {
	//配置环境
	mode:"development",// "production" | "development" | "none"
	//这里应用程序开始执行
	entry:'./src/index.js',
	//如何输出结果的相关选项
	output:{
		// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块
		path:path.resolve(__dirname,"dist"),

		// 输出的文件的文件名
		filename:"bundle.js"
	},
	module:{
		rules:[
		//处理css
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			}
		]
	}
}