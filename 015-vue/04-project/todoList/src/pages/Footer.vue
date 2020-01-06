<!-- 模板 -->
<template>
	<div id="Footer">
		 <input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click='handleDelAllDone'>删除选中</button>
	</div>    
</template>
<!-- 逻辑 -->
<script>
  export default{
    name:'Footer',
    props:{//接收来自父组件的数据
    	todos:Array,
    	selectAllTodo:Function,
    	delAllDone:Function
    },
    computed:{//通过计算属性来计算得出总数和选中的总数
		total(){//数组的长度就是任务的总数
			return this.todos.length
		},
		totalDone(){//reduce,遍历并且计算数组的个数，其内第一个是个回调函数(回调函数内第一个接收的数组内的个数，第二个是数组内的每一项)，第二个接收的是从数组内第几个内容开始遍历计算
			return this.todos.reduce((total,item)=>{
	        if(item.done){//当数组内的每一项里面的done是true，则total+1
	            total = total + 1
	        }
	        	return total
		    },0)
		},
		allDone:{
            get(){
                return (this.total == this.totalDone) && (this.total != 0)
            },
            set(value){//这里的value是allDone的最新值，通过方法传递给父组件
                this.selectAllTodo(value)
            }
        }
     },
     methods:{
     	handleDelAllDone:function(){
     		if(window.confirm('您确定要删除所选中的任务？')){
     			this.delAllDone()
     		}
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
