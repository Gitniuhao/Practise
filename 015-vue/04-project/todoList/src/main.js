import Vue from 'vue'
import App from './App.vue'
// 消除打印台提示信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')//绑定dom节点
