//组件化：就是页面的一部分，把页面的一部分进行组件化写在另一个页面，然后导出，便于维护修改
//引入react和属于react的Compontent函数
import React,{Component,Fragment} from 'react'
import store from './store/index.js'
import {
	 getChangeItemAction,
	 getAddItemAction,
	 getDelItemAction,
	 // getLoadInitDataAction,
	 getRequestInitDataAction
} from'./store/actionCreator.js'
import AppUI from './AppUI.js'
import axios from 'axios'

//容器组件，只负责业务逻辑和数据的处理
//用构造函数继承Compontent构造函数，然后渲染，最后返回html代码
class App extends Component{//自定义组件名字首字母都要大写，而html组件则就是个一个html标签
	constructor(props){//this.props存放组件的外部数据
		// console.log('App constructor...')
		super(props);
		//this.state存放组件内部数据，初始化state,
		// this.state ={
		// 	list:['吃饭','睡觉','打豆豆'],
		// 	task:''
		// },
		this.handleChange=this.handleChange.bind(this),
		this.handleAdd = this.handleAdd.bind(this)

		//通过store的getState方法获取到reducer函数里的默认初始化数据
		this.state = store.getState()
		// console.log(store)
		//监听获取到组件数据发生更新，并且将获取到的最新数据进行设置更新
		store.subscribe(()=>{
			this.setState(store.getState())
		})
	}
	componentDidMount(){
		// axios.get('http://127.0.0.1:3000')
		// .then(result=>{
		// 	// console.log(result.data)
		// 	//派发action
		// 	store.dispatch(getLoadInitDataAction(result.data))
		// })
		// .catch(err =>{
		// 	console.log(err)
		// })
		store.dispatch(getRequestInitDataAction())

	}
	handleAdd(){
		// console.log('btn click..')
		// console.log(this)
		// let list = [...this.state.list,this.state.task]//获取list每一项以及task
		// this.setState((preState)=>({
		// 	list:list,
		// 	task:''//赋给list之后将task置空，为下一个task做准备
		// }),()=>{//如果需要获取最新的Dom,需要写在setState方法的第二个回调函数中
		// 	// console.log(this.ul.childNodes)
		// })
		// console.log(this.ul.childNodes)因为setState是异步程序，现在拿不到最新数据

		//定义并派发action(redux)因为数据在store的reducer里存储，所以不用再次传值
		// const action = {
		// 	type:ADD_ITEM,
		// }
		//将action分离出去比较容易维护
		//action = getAddItemAction()
		store.dispatch(getAddItemAction())
	}
	handleChange(ev){
		// console.log(ev.target.value)
		const val = ev.target.value
		// this.setState({//将输入框的内容赋给task
		// 	task:val
		// })

		//定义并派发action(redux)
		// const action = {
		// 	// type:CHANG_ITEM,
		// 	// payload:val
		// }

		// action = getChangeItemAction(val) 
		store.dispatch(getChangeItemAction(val))
	}
	handleDelete(index){
		// let list = [...this.state.list]
		// list.splice(index,1)//根据index截取数组中的内容
		// this.setState({
		// 	list:list
		// })

		//定义并派发action(redux)
		// const action = {
		// 	type:DEL_ITEM,
		// 	payload:index
		// }

		//action = getDelItemAction(index)
		store.dispatch(getDelItemAction(index))
	}
	render(){//render负责渲染页面
		return(
		{
 			/*(<div className = 'App'>
 				<Row>
 					<Col span={18}>
	 					<Input  
	 					onChange={this.handleChange} 
	 					value={this.state.task}/>
	 				</Col>
	 				<Col span={6}>
		 				<Button type="primary"  
		 				className= 'btn' onClick={this.handleAdd}>
		 					提交
		 				</Button>	
	 				</Col>
 				</Row>
 				<List
 				 style={{marginTop:10}}
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (
			        <List.Item  onClick={this.handleDelete.bind(this,index)}>
			          	 {item}
				    </List.Item>
				   )}
    			/>
 			</div>*/
 		},
 		<AppUI
	 		task={this.state.task}
	 		list={this.state.list}	
	 		handleChange={this.handleChange}
	 		handleAdd={this.handleAdd}
	 		handleDelete={this.handleDelete}
 		 />
		)
	}
}
export default App;
/*
jsx语法：
在js中使用html，用到html标签(以<开头)，就用HTML规则解析，遇到代码块(以{ 开头的)，就以javascript规则解析
	在jsx语法中使用组件分为html组件和自定义组件,自定义组件必须大写字母开头
	在返回组件内容时，只能返回一个dom节点，所以一般需要一个html标签包裹所有的代码，
	而如果不想有多余的标签，可以使用React.Fragment来代替html标签;
	render方法的return语句后面不能是空白行，但是可以用()格式化代码；
	在return语句里注释必须要用{}包括起来
	定义类名的时候要用className,以免和定义类class冲突
	事件函数中通常需要用当前的组件对象,所以需要在绑定事件时bind(this)
	用call和apply会自动执行事件，只能用bind
	在onChange的事件函数中通过event.target.value获取值,将获取到的值赋值给this.state
	当组件的state或props发生改变，render函数会重新执行
	当父组件的render函数执行时，子组件的render函数也会执行
	获取DOM：在dom元素上添加ref属性，然后将dom元素赋予当前this,可以在当前函数中获取到dom元素
*/