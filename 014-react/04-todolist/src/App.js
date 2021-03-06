//组件化：就是页面的一部分，把页面的一部分进行组件化写在另一个页面，然后导出，便于维护修改
//引入react和属于react的Compontent函数
import React,{Component,Fragment} from 'react'
import './App.css';
import Item from './Item.js'
//用构造函数继承Compontent构造函数，然后渲染，最后返回html代码
class App extends Component{//自定义组件名字首字母都要大写，而html组件则就是个一个html标签
	constructor(props){//this.props存放组件的外部数据
		console.log('App constructor...')
		super(props);
		//this.state存放组件内部数据，初始化state,
		this.state ={
			list:['吃饭','睡觉','打豆豆'],
			task:''
		},
		this.handleChange=this.handleChange.bind(this),
		this.handleAdd = this.handleAdd.bind(this)
	}
	static getDerivedStateFromProps(props, state){
		console.log('App getDerivedStateFromProps...',props,state)
		//此函数返回的结果会和this.state合并并返回一个新的this.state
		/*
		return {
			task:'nb!'
		}*/
		//如返回之后内容在this.state中不可更改，可以返回一个空对象
		return null
	}
	componentDidMount(){
		/*当组件挂载完毕后可以在这个组件中发送ajax请求，虽然在其他阶段也能发送ajax请求，
		但其他阶段dom节点还没有加载完毕，可能会出现错误*/
		console.log('App componentDidMount..')
	}
	shouldComponentUpdate(nextProps,nextState){//参数是接下要更新的数据
		console.log('App shouldComponentUpdate...',nextProps,nextState)
		//决定了是否要更新，返回一个布尔值，返回false就是不更新，下一步直接停止；true更新，继续下一步
		//当数据内的task的内容是1的时候就不更新，其他的就继续向下执行
		// if(nextState.task == 1){
		// 	return false
		// }else{
		// 	return true
		// }
		return true
	}
	getSnapshotBeforeUpdate(prevProps,prevState){//存放的是未更新前的数据，且返回的值在componentDidUpdate中可以用到，且必须搭配componentDidUpdate使用
		console.log('App getSnapshotBeforeUpdate..',prevProps,prevState)
		return '111'
	}
	componentDidUpdate(prevState,prevProps,snapshot){//组件更新完毕后使用
		console.log('App componentDidUpdate..',snapshot)
	}
	componentWillUnmount(){
		//当组件从DOm中卸载时执行
		console.log('App componentWillUnmount..')
	}
	handleAdd(){
		// console.log('btn click..')
		// console.log(this)
		let list = [...this.state.list,this.state.task]//获取list每一项以及task
		this.setState((preState)=>({
			list:list,
			task:''//赋给list之后将task置空，为下一个task做准备
		}),()=>{//如果需要获取最新的Dom,需要写在setState方法的第二个回调函数中
			console.log(this.ul.childNodes)
		})
		// console.log(this.ul.childNodes)因为setState是异步程序，现在拿不到最新数据
	}
	handleChange(ev){
		// console.log(ev.target.value)
		const val = this.input.value
		this.setState({//将输入框的内容赋给task
			task:val
		})
	}
	handleDelete(index){
		let list = [...this.state.list]
		list.splice(index,1)//根据index截取数组中的内容
		this.setState({
			list:list
		})
	}
	getItems(){//获取每个节点
		return this.state.list.map((item,index)=>{
			return(//父组件定义属性并赋值
				<Item key={index}
				 task={item}
				 handleDelete={this.handleDelete.bind(this,index)}//将方法传递给子组件
				 // handleDelete={true}
				  />
			)
		})
	}
	render(){//render负责渲染页面
		console.log('App render...')
		/*
		return <div>
			<input /><button>提交</button>
		</div>*/
		// return <Fragment><input /><button>提交</button></Fragment>
		return(
 			<div className = 'App'>
 				{
 					//<input style={{width:300}}/><button>提交</button>，行内样式要用两个{}包括起来
 				}
 				<input ref={(input)=>{this.input = input}} onChange={this.handleChange} value={this.state.task}/>
 				<button className= 'btn' onClick={this.handleAdd}>提交</button>
 				<ul className = 'list' ref={(ul)=>{this.ul = ul}}>
	 				{
						this.getItems()
					}
				</ul>
 			</div>
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