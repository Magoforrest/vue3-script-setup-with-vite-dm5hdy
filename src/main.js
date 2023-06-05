import { createAuth0, useAuth0 } from '@auth0/auth0-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/style.css'
const pinia = createPinia()
const app = createApp(App)

app.use(createAuth0())

try {
  const x = useAuth0()
  window.alert(x)
} catch (e) {
  window.alert(e)
}
app.use(pinia)
app.mount('#app')
