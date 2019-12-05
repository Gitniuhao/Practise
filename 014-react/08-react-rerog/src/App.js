//组件化：就是页面的一部分，把页面的一部分进行组件化写在另一个页面，然后导出，便于维护修改
//引入react和属于react的Compontent函数
import React,{Component,Fragment} from 'react'
import TodoList from './pages/todolist/index.js'

//子组件的集合组件
class App extends Component{
	render(){
		return(
			<TodoList />
		) 
	}
}	

export default App;
