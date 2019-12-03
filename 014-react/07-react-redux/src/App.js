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
import { connect } from 'react-redux'
import './App.css';
import { Input,Button,Row,Col,List } from 'antd';

//容器组件，只负责业务逻辑和数据的处理
//用构造函数继承Compontent构造函数，然后渲染，最后返回html代码
class App extends Component{//自定义组件名字首字母都要大写，而html组件则就是个一个html标签
	componentDidMount(){
		this.props.handleInit()	
	}
	render(){//render负责渲染页面
		 const { handleChange,task,handleAdd,handleDelete,list } = this.props
		return(
 			<div className = 'App'>
 				<Row>
 					<Col span={18}>
	 					<Input  
	 					onChange={handleChange} 
		 					value={task}/>
	 				</Col>
	 				<Col span={6}>
		 				<Button type="primary"  
		 				className= 'btn' onClick={handleAdd}>
		 					提交
		 				</Button>	
	 				</Col>
 				</Row>
 				<List
 				 style={{marginTop:10}}
			      bordered
			      dataSource={list}
			      renderItem={(item,index) => (
			        <List.Item  onClick={()=>{handleDelete(index)}}>
			          	 {item}
				    </List.Item>
				   )}
    			/>
 			</div>		
		)
	}
}
//将store里的数据映射到props里
const mapStateToProps = (state) =>({
	// console.log(state)
	list:state.list,
	task:state.task
})
//将方法映射到组件中
const mapDispatchToProps =(dispatch)=>({
	 handleChange:(ev) =>{//因为运用了箭头函数，函数内的this由定义时决定，故调用时不用再bind
		const val = ev.target.value
		dispatch(getChangeItemAction(val))
	},
	 handleAdd:() =>{
		dispatch(getAddItemAction())
	},
	handleDelete:(index)=>{
		dispatch(getDelItemAction(index))
	},
	handleInit:()=>{
		dispatch(getRequestInitDataAction())
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
