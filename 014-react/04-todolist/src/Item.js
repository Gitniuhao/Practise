import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){//子组件通过this.props.属性名来接收,子组件调用父组件传递的方法，子组件不能改变父组件中的数据
		// console.log('Item render...')
		return(
			<li onClick={this.props.handleDelete}>{this.props.task}</li>
		)
	}
}
Item.propTypes = {//定义父组件传入子组件数据的校验规则
	handleDelete:PropTypes.func,
	task:PropTypes.string
}
Item.defaultProps = {//定义默认值，不传值就用默认值
	task:'okok'
}

export default Item