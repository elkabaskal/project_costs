import Vue from 'vue'
import App from './App.vue'
<<<<<<< Updated upstream
import router from './router'
=======
>>>>>>> Stashed changes
import store from './store'

Vue.config.productionTip = false

new Vue({
<<<<<<< Updated upstream
  router,
  store,
  render: h => h(App)
}).$mount('#app')
=======
    render: h => h(App),
    store
}).$mount('#app')
>>>>>>> Stashed changes
