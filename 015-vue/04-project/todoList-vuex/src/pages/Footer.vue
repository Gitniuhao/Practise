<!-- 模板 -->
<template>
	<div id="Footer">
		 <input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click='handleDelAllDone'>删除所有</button>
	</div>    
</template>
<!-- 逻辑 -->
<script>
    import { mapGetters } from 'vuex'
    import {SELECT_ALL_TODO,DEL_ALL_DONE} from '../store/types.js'
  export default{
    name:'Footer',
    computed:{
		// total(){//数组的长度就是任务的总数
		// 	return this.$store.getters.total
		// },
		// totalDone(){//reduce,遍历并且计算数组的个数，其内第一个是个回调函数(回调函数内第一个接收的数组内的个数，第二个是数组内的每一项)，第二个接收的是从数组内第几个内容开始遍历计算
		// 	return this.$store.getters.totalDone
		// },
        ...mapGetters([//辅助函数将 store 中的 getter 映射到局部计算属性
            'total',
            'totalDone'
        ]),
		allDone:{
            get(){
                return this.$store.getters.allDone
            },
            set(value){//这里的value是allDone的最新值，通过方法传递给父组件
                // this.selectAllTodo(value)
                this.$store.dispatch(SELECT_ALL_TODO,value)
            }
        }
     },
     methods:{
     	handleDelAllDone:function(){
     		if(window.confirm('您确定要删除所选中的任务？')){
     			// this.delAllDone()
                this.$store.dispatch(DEL_ALL_DONE)
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
