import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3TouchEvents from 'vue3-touch-events'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Vue3TouchEvents)
app.mount('#app')
