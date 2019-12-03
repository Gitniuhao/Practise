//将页面部分抽离出来，做到逻辑与结构相分离
import React,{Component} from 'react'
import './App.css';
import { Input,Button,Row,Col,List } from 'antd';


//UI组件，只负责页面的渲染，由定义一个类的形式
// class AppUI extends Component{
// 	render(){//render负责渲染页面
// 		return(
//  			<div className = 'App'>
//  				<Row>
//  					<Col span={18}>
// 	 					<Input  
// 	 					onChange={this.props.handleChange} 
// 		 					value={this.props.task}/>
// 	 				</Col>
// 	 				<Col span={6}>
// 		 				<Button type="primary"  
// 		 				className= 'btn' onClick={this.props.handleAdd}>
// 		 					提交
// 		 				</Button>	
// 	 				</Col>
//  				</Row>
//  				<List
//  				 style={{marginTop:10}}
// 			      bordered
// 			      dataSource={this.props.list}
// 			      renderItem={(item,index) => (
// 			        <List.Item  onClick={this.props.handleDelete.bind(this,index)}>
// 			          	 {item}
// 				    </List.Item>
// 				   )}
//     			/>
//  			</div>
// 		)
// 	}
// }

//无状态组件，把UI组件用函数表示出来(可以省去生命周期函数，优化代码)
const AppUI = (props)=>{
	const { handleChange,task,handleAdd,list,handleDelete } = props
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
			        <List.Item  onClick={handleDelete}>
			          	 {item}
				    </List.Item>
				   )}
    			/>
 			</div>
		)
	}
export default AppUI