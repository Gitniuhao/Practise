//buffer（缓冲器）是用来存放二进制的容器
//一个二进制的0或1代表了 1 bit(位)；
//8 bit(位) = 1 B(字节) = 两个16进制数
//一个英文字母或汉字代表了一个字节，等于8位，等于8个二进制数,等于两个16进制数，
const buf1 = Buffer.from('A');//<Buffer 41> 01102501
//会将数据以十六进制的形式进行存储
console.log(buf1);

const buf2 = Buffer.from('5');
console.log(buf2)
//一个汉字代表了三个字节，等于24 bit(位)，等于24个二进制数,等于6个16进制数，
const buf3= Buffer.from('牛')
console.log(buf3)

const buf4 = Buffer.alloc(10);
console.log(buf4)
//用 0x当前缀表示后面写的是16进制数，且在alloc里设置了长度，如果超过其长度设置，设置了也没用
//如果在设置的时候没有写16进制，写了十进制或二进制，系统将自动转换成16进制数
buf4[0] = 0xfa;
buf4[1] = 99;
buf4[8] = 0x5d;
buf4[12] = 0xfb;

console.log(buf4)

const buf5 = Buffer.alloc(3);
buf5[0] = 0xe7;
buf5[1] = 0x89;
buf5[2] = 0x9d;
console.log(buf5.toString())
