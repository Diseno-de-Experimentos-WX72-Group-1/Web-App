import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import InputMask from 'primevue/inputmask'
import Select from "primevue/select";
import Card from 'primevue/card';
import Textarea from 'primevue/textarea';


import router from "@/router/index.js";

const app = createApp(App);

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    }
});

app.use(router)

app.component('pv-button',Button)
app.component('pv-toolbar', Toolbar)
app.component('pv-input-text', InputText)
app.component('pv-input-mask', InputMask)
app.component('pv-select', Select)
app.component('pv-card', Card);
app.component('pv-textarea', Textarea);

app.mount('#app')