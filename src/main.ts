import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import toastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import '@/assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(toastService)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.mount('#app')
