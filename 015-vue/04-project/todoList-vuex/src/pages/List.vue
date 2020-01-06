<!-- 模板 -->
<template>
	<div id="List">
		<!-- 通过属性的绑定进行数据以及方法的传递 -->
		<Item 
			v-for="(todo,index) in this.$store.state.todos"
			:key="index"
			:todo="todo"
			:index="index"
		/>
	</div>    
</template>
<!-- 逻辑 -->
<script>
 import Item from'./Item.vue'
  export default{
    name:'List',
    components:{
      Item
    }
  }
</script>
<!-- 样式 -->
<style scoped>
/*scoped表示只适用于本组件*/

</style>
