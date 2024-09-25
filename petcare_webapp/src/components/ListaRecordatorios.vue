<template>
  <div id="app">
    <div class="d-flex">
      <!-- Sidebar -->
      <nav class="col-md-2 d-none d-md-block bg-light sidebar shadow-sm">
        <div class="sidebar-sticky p-3">
          <h5 class="sidebar-heading text-center mb-4 text-primary">Dashboard</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/usuarios" class="nav-link d-flex align-items-center">
                <i class="bi bi-person-circle me-2"></i> <span>Usuarios</span>
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/citas" class="nav-link d-flex align-items-center">
                <i class="bi bi-calendar-check me-2"></i> <span>Programar Cita</span>
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/listar_citas" class="nav-link d-flex align-items-center">
                <i class="bi bi-list-check me-2"></i> <span>Listar Citas</span>
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/servicio_domicilio" class="nav-link d-flex align-items-center">
                <i class="bi bi-house-door me-2"></i> <span>Servicio Domicilio</span>
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/historial_medico" class="nav-link d-flex align-items-center">
                <i class="bi bi-file-medical me-2"></i> <span>Historial Médico</span>
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/generar_reporte" class="nav-link d-flex align-items-center">
                <i class="bi bi-bar-chart me-2"></i> <span>Generar Reporte</span>
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/lista_recordatorios" class="nav-link d-flex align-items-center">
                <i class="bi bi-bell me-2"></i> <span>Lista Recordatorios</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main content -->
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom shadow-sm">
          <h1 class="h2">Bienvenido al Dashboard</h1>
          <button class="btn btn-outline-primary d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar">
            <i class="bi bi-list"></i>
          </button>
        </div>

        <!-- Rutas del contenido -->
        <router-view></router-view>

        <!-- Notificaciones de Recordatorios -->
        <div class="container mt-4">
          <h2 class="mb-4">Notificaciones de Recordatorios</h2>

          <div v-if="recordatorios.length" class="list-group">
            <div
              v-for="recordatorio in recordatorios"
              :key="recordatorio.id_recordatorio"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{{ recordatorio.tipo }}:</strong> {{ recordatorio.descripcion }}
              </div>
              <span class="badge bg-primary rounded-pill">{{ recordatorio.fecha_recordatorio }}</span>
            </div>
          </div>
          
          <div v-else>
            <div class="alert alert-info" role="alert">
              No tienes recordatorios.
            </div>
          </div>
        </div>
      </main>

      <!-- Offcanvas Sidebar for mobile -->
      <div class="offcanvas offcanvas-start bg-light" tabindex="-1" id="offcanvasSidebar">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Dashboard</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/usuarios" class="nav-link">
                <i class="bi bi-person-circle"></i> Usuarios
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/citas" class="nav-link">
                <i class="bi bi-calendar-check"></i> Programar Cita
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/listar_citas" class="nav-link">
                <i class="bi bi-list-check"></i> Listar Citas
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/servicio_domicilio" class="nav-link">
                <i class="bi bi-house-door"></i> Servicio Domicilio
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/historial_medico" class="nav-link">
                <i class="bi bi-file-medical"></i> Historial Médico
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/generar_reporte" class="nav-link">
                <i class="bi bi-bar-chart"></i> Generar Reporte
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/lista_recordatorios" class="nav-link">
                <i class="bi bi-bell"></i> Lista Recordatorios
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      recordatorios: []
    };
  },
  created() {
    this.obtenerRecordatorios();
  },
  methods: {
    async obtenerRecordatorios() {
      try {
        const response = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/recordatorios/1'); // 1 sería el id de la mascota actual
        this.recordatorios = response.data;
      } catch (error) {
        console.error('Error al obtener recordatorios:', error);
      }
    }
  }
};
</script>

<style>
.sidebar {
  height: 100vh;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); /* Sombra en el sidebar */
  padding-top: 20px;
}

.sidebar-heading {
  font-weight: bold;
  color: #007bff;
}

.nav-link {
  font-size: 1rem;
  padding: 10px;
  color: #333;
}

.nav-link:hover {
  background-color: #f8f9fa;
  border-radius: 5px;
}

.nav-link .bi {
  margin-right: 8px;
  font-size: 1.2rem;
}

.offcanvas-body .nav-link {
  font-size: 1rem;
  color: #007bff;
}

.main-content {
  background-color: #f8f9fa;
}

.list-group-item {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.list-group-item:hover {
  background-color: #f1f1f1; /* Cambia color al pasar el mouse */
}

.alert {
  border-radius: 5px;
}
</style>
