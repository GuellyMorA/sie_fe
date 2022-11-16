import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import idioma from'./idioma/es/menus.json'
import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: true,
})

Vue.config.productionTip = false
Vue.prototype.$idioma = idioma
Vue.prototype.$axios = { ...axiosInstance }
Vue.prototype.$IdJur = 40730040
Vue.prototype.$idPredp = 0
Vue.prototype.$idPreds = 0
Vue.prototype.$Idges = 2019
Vue.prototype.$server = "http://127.0.0.1:4000"


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')



