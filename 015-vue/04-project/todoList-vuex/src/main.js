import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 消除打印台提示信息
Vue.config.productionTip = false

new Vue({
	store,
  render: h => h(App),
}).$mount('#app')//绑定dom节点
