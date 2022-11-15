import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './assets/main.css'
import './assets/css/style.css'
import './assets/css/media.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
