import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
//import Meta from 'vue-meta';

createApp(App).use(store)/*.use(Meta)*/.use(router).mount('#app')
