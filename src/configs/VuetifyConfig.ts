import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          primary: '#0963B3',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      size: 'small',
      elevation: '0',
      variant: 'tonal',
    },
    VTextField: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: 'auto',
      color: 'primary',
    },
    VTextarea: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: 'auto',
      color: 'primary',
    },
    VSelect: {
      density: 'compact',
      variant: 'outlined',
      color: 'primary',
      hideDetails: 'auto',
    },
    VCombobox: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: 'auto',
      color: 'primary',
    },
    VCheckbox: {
      density: 'compact',
      hideDetails: 'auto',
      color: 'primary',
    },
    VAutocomplete: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: 'auto',
      color: 'primary',
    },
    VRadio: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: 'auto',
      color: 'primary',
    },
    VSwitch: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: 'auto',
      color: 'primary',
    },
    VSlider: {
      hideDetails: 'auto',
      color: 'primary',
    },
    VRangeSlider: {
      hideDetails: 'auto',
      color: 'primary',
    },
    VListItem: {
      density: 'compact',
    },
  },
})
