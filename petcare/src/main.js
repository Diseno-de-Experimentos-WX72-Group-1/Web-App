import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura';

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import InputMask from 'primevue/inputmask'
import Select from "primevue/select";
import Card from 'primevue/card';
import Dropdown from "primevue/dropdown";

import router from "@/router/index.js";

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router)

app.component('pv-button',Button)
app.component('pv-toolbar', Toolbar)
app.component('pv-input-text', InputText)
app.component('pv-input-mask', InputMask)
app.component('pv-select', Select)
app.component('pv-card', Card);

app.mount('#app')