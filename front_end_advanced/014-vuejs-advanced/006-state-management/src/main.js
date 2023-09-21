import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'

Vue.config.productionTip = false

Sentry.init({
	Vue,
	dsn: 'http://f92ff346416e4d96b1fbfb54212e0786@192.168.83.130:9000/2'
})

new Vue({
	render: h => h(App),
}).$mount('#app')
