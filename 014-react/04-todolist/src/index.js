//安装并引进react react-dom然后用ReactDom.render进行页面渲染
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
	<App />,//引用组件
	document.getElementById('root')
)	