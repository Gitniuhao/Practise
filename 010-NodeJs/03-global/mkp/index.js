console.log(process.argv[2])

//根据传入的参数信息创建前端项目目录结构
// kuazhu => css img js index.html
const fs = require('fs')
//1.获取项目名称
const fliename = process.argv[2];
//2.根据项目名称创建基础文件夹以及对应的子文件夹和文件
fs.mkdirSync('./'+fliename)
fs.mkdirSync('./'+fliename+'/css')
fs.mkdirSync('./'+fliename+'/js')
fs.mkdirSync('./'+fliename+'/img')
fs.writeFileSync('./'+fliename+'/index.html')