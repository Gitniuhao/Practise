const req = require('./m5-exports.js')
const _req = require('./m5-exports.js')
//Node对所有加载过的模块对象都会缓存 ,Node对二次加载的模块一律采用缓存优先
console.log(req)
console.log(_req)