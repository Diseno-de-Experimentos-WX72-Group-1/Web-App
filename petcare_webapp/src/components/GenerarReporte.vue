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
                <i class="bi bi-person-circle mr-2"></i> Usuarios
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/citas" class="nav-link d-flex align-items-center">
                <i class="bi bi-calendar-check mr-2"></i> Programar Cita
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/listar_citas" class="nav-link d-flex align-items-center">
                <i class="bi bi-list-check mr-2"></i> Listar Citas
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/servicio_domicilio" class="nav-link d-flex align-items-center">
                <i class="bi bi-house-door mr-2"></i> Servicio Domicilio
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/historial_medico" class="nav-link d-flex align-items-center">
                <i class="bi bi-file-medical mr-2"></i> Historial Médico
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/generar_reporte" class="nav-link d-flex align-items-center">
                <i class="bi bi-bar-chart mr-2"></i> Generar Reporte
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/lista_recordatorios" class="nav-link d-flex align-items-center">
                <i class="bi bi-bell mr-2"></i> Lista Recordatorios
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

        <!-- Generar Reporte Section -->
        <div class="container mt-4">
          <h2 class="mb-4">Generar Reporte de Cita</h2>

          <form @submit.prevent="generarReporte" class="mb-4">
            <div class="mb-3">
              <label for="idCita" class="form-label">ID de Cita:</label>
              <input
                type="number"
                id="idCita"
                v-model="idCita"
                required
                class="form-control"
                min="1"
              />
            </div>
            <div class="mb-3">
              <label for="resumen" class="form-label">Resumen del Reporte:</label>
              <textarea
                id="resumen"
                v-model="resumen"
                required
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Generar Reporte</button>
          </form>

          <!-- Alert for success or error messages -->
          <div v-if="mensaje" :class="{'alert': true, 'alert-success': mensaje.success, 'alert-danger': !mensaje.success}" role="alert">
            {{ mensaje.text }}
          </div>

          <h2 class="mt-4">Reportes Generados</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID Reporte</th>
                <th>ID Cita</th>
                <th>Resumen</th>
                <th>Fecha de Generación</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reporte in reportes" :key="reporte.id_reporte">
                <td>{{ reporte.idReporte }}</td>
                <td>{{ reporte.cita.id }}</td>
                <td>{{ reporte.resumen }}</td>
                <td>{{ reporte.fechaGeneracion }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Rutas del contenido -->
        <router-view></router-view>
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
      idCita: null,
      resumen: '',
      reportes: [],
      mensaje: null // New property for message handling
    };
  },
  created() {
    this.obtenerReportes();
  },
  methods: {
    async obtenerReportes() {
      try {
        const response = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/reportes');
        this.reportes = response.data;
      } catch (error) {
        console.error('Error al obtener reportes:', error);
      }
    },
    async generarReporte() {
      try {
        const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/reportes/generar', {
          idCita: this.idCita,
          resumen: this.resumen
        });
        this.mensaje = { text: 'Reporte generado exitosamente', success: true };
        console.log(response);
        this.obtenerReportes();
        this.idCita = null;
        this.resumen = '';
      } catch (error) {
        this.mensaje = { text: 'Error al generar el reporte: ' + error.message, success: false };
        console.error('Error al generar el reporte:', error);
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

.table {
  margin-top: 20px;
}
</style>
