const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//固定写法
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
		index:'./src/pages/index/index.js',
		common:'./src/pages/common/common.js'
	},
	//如何输出结果的相关选项
	output:{
		// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块
		path:path.resolve(__dirname,"dist"),

		//对于单个入口，出口可以是一个静态文件
		//对于多个入口,也只指定一个输出配置,但需要用模板来描述出口文件的名称,常见的模板有
		// 输出的文件的文件名:[name]:chunk名称，[hash]:模块标识符，每次打包hash都不同
		// filename:"[name]-bundle.js"
		// filename:"[name]-[chunkhash]-bundle.js"
		filename:"[name]-[hash]-bundle.js"
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
	},
	plugins:[
		//自动生成html代码配置
		new HtmlWebpackPlugin({
			template:'./src/view/index.html',//模板文件
			filename:'index.html',//输出的文件名
			// inject:'head',//脚本卸载哪个标签里,默认是true,在body后引进
			hash:true,//给生成的js/css文件添加一个唯一的hash
			chunks:['index','common']//可以设置自动引进哪一个文件
		}),
		//自动清理无用文件
		new CleanWebpackPlugin()
	],
	devServer:{//webpack-dev-server提供了一个简单的基于Node express的web服务器，能够实时重新加载页面
		contentBase:'./dist',//内容的目录
		port:'8080'//服务运行的端口,可以手动更改端口，但是修改后要重新打包
		//在package.json里配置后，在终端可以用npm run start或npm start命令行启动
	}
}
