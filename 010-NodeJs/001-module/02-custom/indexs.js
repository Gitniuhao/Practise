const fs = require('fs');
const kztest = require('kztest')
//核心模块的优先级高于自定义模块
console.log(fs)
console.log(kztest)