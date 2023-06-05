import { createAuth0, useAuth0 } from '@auth0/auth0-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/style.css'
import {router} from './router/index.js'
const pinia = createPinia()
const app = createApp(App)
const router= createRouter()
app.use(createAuth0())

try {
  const x = useAuth0()
  window.alert(x)
} catch (e) {
  window.alert(e)
}
app.use(pinia)
app.use(router)
app.mount('#app')
