    import './assets/main.css'

    import { createApp } from 'vue'
    import App from './App.vue'
    import PrimeVue from "primevue/config";
    import Button from "primevue/button";
    import Toolbar from "primevue/toolbar";
    import InputText from "primevue/inputtext";
    import InputMask from 'primevue/inputmask'
    import Select from "primevue/select";

    import router from "@/router/index.js";

    const app = createApp(App);

    app.use(PrimeVue);
    app.use(router)

    app.component('pv-button',Button)
    app.component('pv-toolbar', Toolbar)
    app.component('pv-input-text', InputText)
    app.component('pv-input-mask', InputMask)
    app.component('pv-select', Select)

    app.mount('#app')