import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import * as PrimeVueComponents from 'primevue'

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

Object.entries(PrimeVueComponents).forEach(([, component]) => {
  if (component?.name) {
    app.component(component.name, component)
  }
})

app.mount('#app')
