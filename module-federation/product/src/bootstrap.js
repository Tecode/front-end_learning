import 'core-js/stable';
import 'regenerator-runtime/runtime';
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

  console.log(window.location.pathname, "#product-app")
  // window.location.href = "/bar"
  return {
    onParentNavigate: (nextPathname) => {
      const { pathname } = window.location;
      console.log(app.$route, pathname, nextPathname);
      // if (pathname !== nextPathname) {
      //   console.log("route from container to auth", nextPathname);
      //   history.push(nextPathname);
      // }
    }
  };
}

const el = document.querySelector("#product-app")
if (el) mount(el)

export { mount }
