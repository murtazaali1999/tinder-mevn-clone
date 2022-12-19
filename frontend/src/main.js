import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from "pinia"
import router from "./router/index";

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router).use(createPinia()).mount('#app')
