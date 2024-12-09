import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import * as PrimeVueComponents from 'primevue'

import App from './App.vue'
import router from './router'
import '@/assets/styles/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    ripple: true,
    preset: Aura,
  },
})

Object.entries(PrimeVueComponents).forEach(([_name, component]) => {
  const ignoreImports = ['dialog', 'button', 'image', 'menu', 'select', 'fieldset', 'textarea']

  if (component?.name && !ignoreImports.includes(component?.name)) {
    app.component(component.name, component)
  } else {
    const directives = ['StyleClass', 'Tooltip', 'Ripple']

    if (directives.includes(_name)) {
      app.directive(_name?.toLowerCase(), component)
    }
  }
})

app.mount('#app')
