//安装并引进react react-dom然后用ReactDom.render进行页面渲染
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
	<h1>Hello Word</h1>,
	document.getElementById('root')
)	