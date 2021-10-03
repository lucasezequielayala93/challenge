import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.eventBus = new Vue();
Vue.filter('truncate', function (value, limit) {
  if (value.length > limit)
    value = value.substring(0, (limit - 3)) + '...';
  return value
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
