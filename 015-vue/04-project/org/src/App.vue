<!-- 模板 -->
<template>
  <div id="app">
    <!-- <img src="./assets/images/logo.png" alt=""> -->
    <Logo />
    <!-- <p>俺是来学vue的！</p> -->
    <Message task='学习'/>
    <p>俺来试试能不能变颜色</p>
  </div>
</template>
<!-- 逻辑 -->
<script>
  import Logo from './pages/Logo.vue'
  import Message from './pages/Message.vue'
  export default{
    name:'App',
    components:{
      Logo,
      Message
    }
  }
</script>
<!-- 样式 -->
<style>

</style>
