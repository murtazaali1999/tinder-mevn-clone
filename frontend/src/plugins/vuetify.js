/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md2 } from "vuetify/blueprints"
import { mdi } from "vuetify/iconsets/mdi"
import { fa } from "vuetify/iconsets/fa"

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  //  blueprint: md2,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
      fa
    }
  }
})
