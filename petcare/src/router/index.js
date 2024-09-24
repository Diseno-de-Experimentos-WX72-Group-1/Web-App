
import { createRouter, createWebHistory } from 'vue-router'
import NotFoundComponent from "@/core/public/pages/not-found-component.vue";
import LoginVeterinarianComponent from "@/core/public/components/login-veterinarian-component.vue";
import LoginUserComponent from "@/core/public/components/login-user-component.vue";
import SignupComponent from "@/core/public/components/signup-component.vue";
import MainHomeComponent from "@/core/public/components/main-home-component.vue";
import UserDash from '@/core/public/components/user-dash.component.vue'
import TheAppointment from '@/core/Appointment/Components/the-appointment.component.vue'


const routes = [

    { path: '/', component: MainHomeComponent},
    { path: '/login-veterinarian', component: LoginVeterinarianComponent},
    { path: '/login-user', component: LoginUserComponent},
    { path: '/signup', component: SignupComponent},
    { path: '/:pathMatch(.*)*', component: NotFoundComponent },
    { path: '/user-dashboard', component: UserDash},
    { path: '/appointment', component: TheAppointment}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router