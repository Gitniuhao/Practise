import {
	CHANG_ITEM,
	ADD_ITEM,
	DEL_ITEM
} from './actionTypes.js'

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