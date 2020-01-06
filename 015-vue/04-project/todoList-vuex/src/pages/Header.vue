<!-- 模板 -->
<template>
	<div id="Header">
		<h1>TodoList</h1>
		<input type="text"
			placeholder="请输入任务"
			v-model="task"
			@keyup.enter="handleAdd()" 
		>
	</div>    
</template>
<!-- 逻辑 -->
<script>
	import {ADD_TODO} from '../store/types.js'
  export default{
    name:'Header',
    data(){
		return{
			task:''
		}
    },
    methods:{
		handleAdd:function(){
			//校验数据
			var task = this.task.trim()
			if(!task){
				alert('请先输入任务')
				return
			}
			//封装任务对象
			var todo ={
				task,
				done:false
			}
			//派发action,传递数据,dispatch参数第一个是类型，第二个是数据
			this.$store.dispatch(ADD_TODO,todo)
			//清空输入框
			this.task=''
		}
     }
  }
</script>
<!-- 样式 -->
<style scoped>
/*scoped表示只适用于本组件*/
	#Header{
		text-align: center;
	}
	input{
		height: 34px;
		width: 100%;
		padding-left: 10px;
		box-sizing: border-box;
	}
</style>
