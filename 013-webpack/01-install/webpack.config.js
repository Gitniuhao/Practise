const path = require('path')
module.exports = {
	//配置环境
	mode:"development",// "production" | "development" | "none"

	//应用程序在这个指定的文件中开始执行
	//webpack开始打包
	//单入口写法：
	//第一种：
	// entry:{
	// 	index:'./src/index.js'
	// },

	//第二种
	// entry:'./src/index.js',

	//多入口写法：
	entry:{
		//chunk名称：入口文件路径
		index:'./src/index.js',
		about:'./src/about.js',
		contact:'./src/contact.js'
	},
	//如何输出结果的相关选项
	output:{
		// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块
		path:path.resolve(__dirname,"dist"),

		// 输出的文件的文件名:，[chunk]
		// filename:"[name]-bundle.js",[name]:chunk名称，
		// filename:"[name]-[chunkhash]-bundle.js",[hash]:模块标识符，每次打包hash都不同
		filename:"[name]-[hash]-bundle.js"//[chunkhash] chunk内容的hash,每一个chunkhash值都不同
	},
	module:{//webpack自身只支持javascript,而loader能够让webpack处理那些非javascript文件
		rules:[
		//处理css
			{//处理css文件需要安装 css-loader和style-loader
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			//处理图片
			{
				test:/\.(png|jpg|gif)$/i,
				use:[
					{//url-loader默认使用file-loader处理图片文件，需要额外安装file-loader
						loader:'url-loader',
						options:{//当图片大小超过limit值时，会生成一个文件，
							limit:10
						}
					}
				]
			}
		]
	}
}
/*
module:{
	rules:[
		{
			test:/\.css$/,
			use:[
				'style-loader',
				'css-loader'
			]
		},
		{
			test:/\.(png|jpg|gif)/i,
			use:[
				{
					'url-loader',
					options:{
						limit:10
					}
				}
			]
		}
	]
}*/