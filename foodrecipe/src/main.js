import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import './assets/css/style.css';
import './assets/css/media.css';

createApp(App).use(router).mount("#app");