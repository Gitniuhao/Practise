<!-- 模板 -->
<template>
  <div id="App">
    <!-- 通过绑定属性的方法将数据以及方法传递给子组件 -->
    <Header />
    <List />
    <Footer  
    />
  </div>
</template>
<!-- 逻辑 -->
<script>
  import Header from './pages/Header.vue'
  import List from './pages/List.vue'
  import Footer from './pages/Footer.vue'
  export default{
    name:'App',
    components:{
      Header,
      List,
      Footer
    }
  }
</script>
<!-- 样式 -->
<style>
  #App{
    width: 600px;
    margin:100px auto;
  }
</style>
