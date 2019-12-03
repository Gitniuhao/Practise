//安装并引进react react-dom然后用ReactDom.render进行页面渲染
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux' 
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<App />		
	</Provider>,
	document.getElementById('root')
)
