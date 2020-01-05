<!-- 模板 -->
<template>
	<div 
	id="Item"
	:style="{backgroundColor:bgc}"
	@mouseenter='handleShow(true)'
	@mouseleave='handleShow(false)'
	>
		<input type="checkbox" v-model="todo.done">
		<span>{{todo.task}}</span>
		<button v-if="isShow" @click="handleDel()">删除</button>
	</div>    
</template>
<!-- 逻辑 -->
<script>
  export default{
    name:'Item',
    data(){
	return{
     bgc:'#fff',
     isShow:false
	}
    },
    methods:{
     handleShow(flag){
       this.bgc = flag ? '#ccc' : '#fff'
       this.isShow = flag
     },
     handleDel(){
      if(window.confirm('您确定要删除'+this.todo.task+'吗?')){
        this.delTodo(this.index)
      }
     }
    },
    props:{
      todo:Object,
      index:Number,
      delTodo:Function
    }
  }
</script>
<!-- 样式 -->
<style scoped>
/*scoped表示只适用于本组件*/
	#Item{
        width: 100%;
        line-height: 40px;
        border: 1px dashed #ccc;
        margin-top: 10px;
    }
    input{
        float: left;
        margin-top: 14px;
        vertical-align: top;
    }
    button{
        float: right;
        margin-top: 14px;
        vertical-align: top;
    }
</style>
