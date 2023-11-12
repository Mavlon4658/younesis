import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/app.scss'
import components from '@/components/UI'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component);
})

app.use($)
    .use(store)
    .use(router)
    .mount('#app')
