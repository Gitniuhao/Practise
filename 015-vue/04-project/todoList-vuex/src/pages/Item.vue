<!-- 模板 -->
<template>
	<div 
	id="Item"
	:style="{backgroundColor:bgc}"
	@mouseenter='handleShow(true)'
	@mouseleave='handleShow(false)'
	>
	<!-- 通过对双选框双向绑定，改变选中取消状态 -->
		<input type="checkbox" v-model="todo.done">
		<span>{{todo.task}}</span>
		<!-- 用v-if='isShow'决定删除按钮的出现与隐藏 -->
		<button v-if="isShow" @click="handleDel()">删除</button>
	</div>    
</template>
<!-- 逻辑 -->
<script>
  import {DEL_TODO} from '../store/types.js'
  export default{
    name:'Item',
    data(){
    	return{
         	bgc:'#fff',
         	isShow:false
    	  }
    },
    props:{//接收来自父组件的数据
      todo:Object,
      index:Number
    },
    methods:{
     handleShow(flag){
       this.bgc = flag ? '#ccc' : '#fff'
       this.isShow = flag
     },
     handleDel(){
      if(window.confirm('您确定要删除'+this.todo.task+'吗?')){
        //派发action,并传递删除所需要的index参数
        this.$store.dispatch(DEL_TODO,this.index)
      }
     }
    },
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
        padding-left: 20px;
        box-sizing: border-box;
    }
    button{
        float: right;
        margin-top: 14px;
        vertical-align: top;
    }
</style>
