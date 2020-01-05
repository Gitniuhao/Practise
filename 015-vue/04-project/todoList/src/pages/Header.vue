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
  export default{
    name:'Header',
    data(){
return{
task:''
}
    },
    props:{
    addTodo:Function,
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
			//将任务对象传递到父组件中
			this.addTodo(todo)
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
