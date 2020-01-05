<!-- 模板 -->
<template>
	<div id="Message">
		<p>俺是来学vue的！{{task}}</p>
	</div>    
</template>
<!-- 逻辑 -->
<script>
  export default{
    name:'Message',
    props:{
      task:String
    }
  }
</script>
<!-- 样式 -->
<style scoped>
/*scoped表示只适用于本组件*/
	p{
		color:orange;
	}
</style>
