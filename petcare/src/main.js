import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import VueMq from 'vue3-mq'

import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import Card from 'primevue/card';
import Button from "primevue/button";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('pv-card', Card);
app.component('pv-button', Button);

app.use(VueMq, {
    breakpoints: {
        sm: 640,
        md: 768,
        lg: Infinity
    },
    defaultBreakpoint: 'sm',
});
app.mount('#app');
