import { createRouter, createWebHistory } from 'vue-router';
import RegistroComponent from '../components/RegistroComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import UsuariosComponent from '../components/UsuariosComponent.vue';
import CitaVeterinaria from '../components/CitaVeterinaria.vue'; // Asegúrate de importar este componente
import ListarCitas from '@/components/ListarCitas.vue';
import ServicioDomicilio from '@/components/ServicioDomicilio.vue';
import HistorialMedico from '@/components/HistorialMedico.vue';
import GenerarReporte from '@/components/GenerarReporte.vue';

import ListaRecordatorios from '@/components/ListaRecordatorios.vue';
import InicioPet from '@/components/InicioPet.vue';
import DassboardCita from '@/components/DassboardCita.vue';
import UsuarioCita from '@/components/UsuarioCita.vue';
import ReporteUnico from '@/components/ReporteUnico.vue';
import DashboardCliente from '@/components/DashboardCliente.vue';
import MascotasList from '@/components/MascotasList.vue';
import SolicitarServicioCliente from '@/components/SolicitarServicioCliente.vue';
import DashboardVeterinario from '@/components/DashboardVeterinario.vue';
import VeterinarioConsula from '@/components/VeterinarioConsula.vue';

const routes = [

 
  {
    path: '/registro',
    name: 'Registro',
    component: RegistroComponent,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/inicio_pet',
    name: 'InicioPet',
    component: InicioPet,
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: UsuariosComponent,
  },
  {
    path: '/veterinario_consulta2',
    name: 'VeterinarioConsulta2',
    component: VeterinarioConsula,
  },
  {
    path: '/citas',
    name: 'CitaVeterinaria',
    component: CitaVeterinaria,
  },

  {
    path: '/usuario_cita',
    name: 'UsuarioCita',
    component: UsuarioCita,
  },
  {
    path: '/servicio_domicilio',
    name: 'ServicioDomicilio',
    component: ServicioDomicilio,
  },
  {
    path: '/listar_citas',
    name: 'ListarCitas',
    component: ListarCitas,
  },
  {
    path: '/historial_medico',
    name: 'HistorialMedico',
    component: HistorialMedico,
  },
  {
    path: '/generar_reporte',
    name: 'GenerarReporte',
    component: GenerarReporte,
  },
  {
    path: '/lista_recordatorios',
    name: 'Lista_Recordatorios',
    component: ListaRecordatorios,
  },

  {
    path: '/dashboard',
    name: 'DassboardCiita',
    component: DassboardCita,
  },

  {
    path: '/mascotas',
    name: 'Mascotas',
    component: MascotasList,
  },

  {
    path: '/mascotas/:id', // Ruta para la vista de descripción con un parámetro de ID
    name: 'mascotasusuario',
    component: MascotasList,
  },

  {
    path: '/solicitar/:id', // Ruta para la vista de descripción con un parámetro de ID
    name: 'solicitarserviciocliente',
    component: SolicitarServicioCliente,
  },


  {
    path: '/reporte/:idCita',
    name: 'reporte',
    component: ReporteUnico // Componente donde se generará el reporte
  },

  {
    path: '/dashboard_cliente/:id',
    name: 'DashboardCliente',
    component: DashboardCliente, // Asegúrate de importar este componente
  },

  {
    path: '/dashboard_veterinario/:id',
    name: 'DashboardVeterinario',
    component: DashboardVeterinario, // Asegúrate de importar este componente
  },

  {
    path: '/', // Ruta por defecto
    redirect: '/inicio_pet', // Redirige a la página de registro
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
