//模块加载规则：首先按照模块的文件名进行查找，其次以后缀.js的查找，再其次以后缀.json的查找，
//再其次以后缀.node的查找，最后找不到则会报错
const req = require('./m9')
console.log(req)