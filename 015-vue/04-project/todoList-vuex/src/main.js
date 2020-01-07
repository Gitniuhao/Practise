//入口文件
import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 消除打印台提示信息
Vue.config.productionTip = false

new Vue({//将store进入，全部组件都可以拿到store里的数据
	store,
  render: h => h(App),
}).$mount('#app')//绑定dom节点
