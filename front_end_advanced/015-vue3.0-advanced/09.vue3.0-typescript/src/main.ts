import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const func = (data:string) => {
  console.log(data)
}

func()

createApp(App).use(store).use(router).mount('#app')
