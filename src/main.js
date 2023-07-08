import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/index.css'
import { save } from './core/main.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
save()

app.mount('#app')
