//组件化：就是页面的一部分，把页面的一部分进行组件化写在另一个页面，然后导出，便于维护修改
//引入react和属于react的Compontent函数
import React,{Component,Fragment} from 'react'
import TodoList from './pages/todolist/index.js'
import {
	BrowserRouter as Router,
	// HashRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
//使用BrowserRouter时,页面刷新会向服务器发送请求,而HashRouter不会
class Home extends Component{
	render(){
		return (
				<h1>this is home page</h1>
			)
	}
}
//子组件的集合组件
class App extends Component{
	render(){
		return(
			<Router>
				<div className ='App'>
					<nav>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/TodoList'>TodoList</Link>
						</li>
						 <Route exact path='/' component={Home} />
						 <Route path='/TodoList' component={TodoList} />
						{
							// <Route exact path='/'><Home /></Route>
							// <Route exact path='/TodoList'><TodoList /></Route>
						}
					</nav>
				</div>
			</Router>
		) 
	}
}	

export default App;
