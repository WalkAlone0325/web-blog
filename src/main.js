import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'
import './assets/scss/reset.scss'
import axios from 'axios'

const seivice = axios.create({
  baseURL: 'http://localhost:3000/web/api',
  timeout: 5000,
})

const app = createApp(App)
app.config.globalProperties.$axios = seivice

app
  .use(store)
  .use(router)
  .mount('#app')
