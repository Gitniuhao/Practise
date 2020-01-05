<!-- 模板 -->
<template>
	<div id="Footer">
		<input type="checkbox">
		<span>{{totalDone}}/{{total}}</span>
		<button>删除所有</button>
	</div>    
</template>
<!-- 逻辑 -->
<script>
  export default{
    name:'Footer',
    props:{
    todos:Array
    },
    computed:{
	total:function(){
		return this.todos.length
	},
	totalDone:function(){
		return this.todos.reduce((total,item)=>{
        if(item.done){
            total = total + 1
        }
        return total
	},0)
	}
	}
    }
</script>
<!-- 样式 -->
<style scoped>
/*scoped表示只适用于本组件*/
	#Footer{
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
