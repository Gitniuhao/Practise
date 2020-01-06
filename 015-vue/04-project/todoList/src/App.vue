<!-- 模板 -->
<template>
  <div id="App">
    <!-- 通过绑定属性的方法将数据以及方法传递给子组件 -->
    <Header :addTodo='addTodo'/>
    <List :todos="todos" :delTodo="delTodo"/>
    <Footer :todos="todos" 
    :selectAllTodo="selectAllTodo"
    :delAllDone="delAllDone"
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
    },
    data(){
      return{//渐进式框架，从顶层组件传递数据给子组件
        todos:[
          {
            task:'吃饭',
            done:false
          },
          {
            task:'睡觉',
            done:false
          }
        ]
      }
    },
    methods:{
      addTodo:function(todo){
        this.todos.unshift(todo)
      },
      delTodo:function(index){
        this.todos.splice(index,1)
      },
      selectAllTodo:function(value){
        this.todos.forEach((item)=>{//将value的值赋予每一个item的done，使allDone和每一个done的值相同
          item.done = value
        })
      },
      delAllDone:function(){//通过筛选返回一个新的数组
        this.todos = this.todos.filter(item=>!item.done)
      }
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
