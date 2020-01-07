<!-- 模板 -->
<template>
	<div id="List">
		<!-- 通过属性的绑定进行数据的传递，且可以通过this.$store.state拿到store里面的state里的数据 -->
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
