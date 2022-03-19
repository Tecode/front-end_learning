import Vue from 'vue'
import App from './App.vue'
import router from "./routes"

Vue.config.productionTip = false

const mount = (el) => {
  const app = new Vue({
    router,
    render: h => h(App),
  })
  app.$mount(el)
}

const el = document.querySelector("#product-app")
console.log(el, "#product-app");
if (el) mount(el)

export { mount }
