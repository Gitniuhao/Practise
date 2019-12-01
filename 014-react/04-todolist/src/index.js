//安装并引进react react-dom然后用ReactDom.render进行页面渲染
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
	<App />,//引用组件
	document.getElementById('root')
)

/*
//虚拟DOM测试
function tick(){
	const timer = (
		<div>
            <h1>hello</h1>
            <p>{new Date().toLocaleString()}</p>
        </div>
	)
	ReactDOM.render(
		timer,//引用组件
		document.getElementById('root')
	)
}
setInterval(tick,1000)	
/*
虚拟DOM就是一个描述DOM节点的js对象
虚拟DOM原理：
1、state(数据)
2、JSX(模板)
3、数据+模板 =>真实的DOM
4、生成原始的虚拟DOM
5、state change (数据产生变化)
6、数据+模板 =>(生成新的虚拟DOM)
7、比较原始虚拟DOM和新的虚拟DOM,找出区别(diff算法)
8、直接操作DOM改变有区别的DOM
*/