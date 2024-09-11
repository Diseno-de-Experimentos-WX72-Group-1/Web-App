
import { createRouter, createWebHistory } from 'vue-router'
import NotFoundComponent from "@/core/public/pages/not-found-component.vue";
import LoginComponent from "@/core/public/components/login-component.vue";
import SignupComponent from "@/core/public/components/signup-component.vue";


const routes = [
    { path: '/', component: LoginComponent},
    { path: '/signup', component: SignupComponent},
    { path: '/:pathMatch(.*)*', component: NotFoundComponent }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router