const crypto = require('crypto');
//生成一个hmac的实例对象，内部的参数为算法；
const hmac = crypto.createHmac('sha512','ajkdklhdbcklbasdc');
//进行加密数据,在流式传输时，可以使用新数据多次调用此方法。
hmac.update('14895');
//生成加密后的数据,Hash 对象在 hmac.digest() 方法调用之后不能再次被使用。多次的调用会引发错误并抛出。
console.log(hmac.digest('hex'));