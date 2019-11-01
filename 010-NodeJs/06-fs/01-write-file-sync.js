const fs = require('fs');

//逐步操作

//1.打开文件 fs.openSync(path[, flags, mode])
//path为文件的路径
//flag用于表明需要什么操作，
//w-打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。
//'a' - 打开文件用于追加。如果文件不存在，则创建该文件。
// const fd = fs.openSync('./01-aa.txt','w');//fd相当于一个打开文件成功后返回的标识
const fd = fs.openSync('./01-aa.txt','a');//fd相当于一个打开文件成功后返回的标识
//2.写入内容 fs.writeSync(fd, buffer[, offset[, length[, position]]])
//fd就是把文件成功后的标识传入
//buffer就是传入一个buffer数据，后面的可写可不写
// fs.writeSync(fd,'hai');
fs.writeSync(fd,'plmm');
//3.保存文件并退出
fs.closeSync(fd);

//合并操作 fs.writeFileSync(file, data[, options]),分别是文件名，需要传入的数据，且options中也可以
//传入flag,表明操作
fs.writeFileSync('./01-aa.txt',',可不可以加个WX ?',{flag:'a'})