//buffer是用来存放二进制的容器
//一个英文字母或汉字代表了一个字节
const buf1 = Buffer.from('A');
console.log(buf1);
//一个汉字代表了三个字节
const buf2 = Buffer.from('5');
console.log(buf2)
const buf3= Buffer.from('牛')
console.log(buf3)

const buf4 = Buffer.alloc(10);
console.log(buf4)

buf3[0] = 0xfa;
buf3[8] = 0x5d;
buf3[10] = 0xfb;

console.log(buf3)

const buf5 = Buffer.alloc(3);
buf5[0] = 0xe7;
buf5[1] = 0x89;
buf5[2] = 0x9d;
console.log(buf5)