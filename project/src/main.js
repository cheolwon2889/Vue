import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWriter from "vue-writer";
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueWriter)
app.component('base-crad' , BaseCard);
app.mount('#app')
