import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//以上两步是将elementUi的js和css引入，当是，js组件还并没有交由vue来管理

//以上
Vue.use(ElementUi);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
