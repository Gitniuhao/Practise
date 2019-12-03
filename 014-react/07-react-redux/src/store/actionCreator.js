//在此页面定义并导出各个action(对象)，便于维护与处理
import {
	CHANG_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	DATA_LOAD
} from './actionTypes.js'
import axios from 'axios'

export  const getChangeItemAction = (val)=>({
			type:CHANG_ITEM,
			payload:val	
})
export  const getAddItemAction = ()=>({
			type:ADD_ITEM,
})
export  const getDelItemAction = (index)=>({
			type:DEL_ITEM,
			payload:index
})
export  const getLoadInitDataAction = (payload)=>({
			type:DATA_LOAD,
			payload
})
export const getRequestInitDataAction = ()=>{
	return (dispatch,getState) =>{
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			// console.log(result.data)
			//派发action
			dispatch(getLoadInitDataAction(result.data))
		})
		.catch(err =>{
			console.log(err)
		})
	}
}