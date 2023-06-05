import { createAuth0, useAuth0 } from '@auth0/auth0-vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(createAuth0())

try {
  const x = useAuth0()
  window.alert(x)
} catch (e) {
  window.alert(e)
}

app.mount('#app')
