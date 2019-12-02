const defaultState = {//初始化默认数据
	list:['吃饭','睡觉','打豆豆'],
	task:''
}
import {
	CHANG_ITEM,
	ADD_ITEM,
	DEL_ITEM
} from './actionTypes.js'

//reducer是一个纯函数(有固定的输入就用固定的输出)
//reducer不能直接改变state,因为sate由store进行管理，而store中的数据由所有组件共享，
//可以用一个newState来改变自身state,而且getState获取的state数据还是是store里面的state
//将初始化默认数据赋给reducer函数里的state并返回出去
export default (state = defaultState,action)=>{
	//当action里的type是'change_item'时，将action里的payload赋给newstate里的task
	if(action.type == CHANG_ITEM){//处理输入时数据变化
		// console.log(action,state)
		// state.task = action.payload//错误写法

		//深拷贝生成一个newState
		const newState = JSON.parse(JSON.stringify(state))

		//非纯函数(输出结果不固定)
		// newState.task = action.payload + Date.now();
		// newState.task = action.payload + Math.random();

		newState.task = action.payload;
		return newState;
	}
	if(action.type == ADD_ITEM){//处理添加时数据变化
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.task)//将输入框的数据添加进newState的List(增加)
		newState.task = ''

		return newState
	}
	if(action.type == DEL_ITEM){//处理删除时数据变化
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.payload,1)//根据index截取list里的莫一项(删除)

		return newState
	}
	return state;//如果上述都没有，返回state
}