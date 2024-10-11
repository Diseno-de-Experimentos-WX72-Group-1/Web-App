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

        <!-- Solicitud de Servicio a Domicilio -->
        <h2 class="mb-4">Solicitud de Servicio a Domicilio</h2>
        <form @submit.prevent="guardarServicio" class="mb-4">
          <div class="mb-3">
            <label for="mascotaId" class="form-label">ID de Mascota:</label>
            <input type="number" id="mascotaId" v-model="servicio.mascota.id" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="veterinarioId" class="form-label">ID de Veterinario:</label>
            <input type="number" id="veterinarioId" v-model="servicio.veterinario.id" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="direccion" class="form-label">Dirección:</label>
            <input type="text" id="direccion" v-model="servicio.direccion" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="estado" class="form-label">Estado:</label>
            <select id="estado" v-model="servicio.estado" class="form-select">
              <option value="PENDIENTE">Pendiente</option>
              <option value="REALIZADO">Realizado</option>
              <option value="CANCELADO">Cancelado</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">{{ isEditing ? 'Actualizar Servicio' : 'Solicitar Servicio' }}</button>
        </form>

        <div v-if="mensaje" class="alert alert-info">{{ mensaje }}</div>

        <h3>Servicios Programados</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>VETERINARIO</th>
              <th>Dirección</th>
              <th>Fecha de Solicitud</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="servicio in servicios" :key="servicio.idServicio">
              <td>{{ servicio.idServicio }}</td>
              <td>{{ servicio.veterinario.nombre }}</td>
              <td>{{ servicio.direccion }}</td>
              <td>{{ servicio.fechaSolicitud }}</td>
              <td>{{ servicio.estado }}</td>
              <td>
                <button @click="editarServicio(servicio)" class="btn btn-warning btn-sm">Editar</button>
                <button @click="cancelarServicio(servicio.idServicio)" class="btn btn-danger btn-sm">Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>

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
      servicios: [],
      servicio: {
        idServicio: null,
        mascota: {
          id: null
        },
        veterinario: {
          id: null
        },
        direccion: '',
        estado: 'PENDIENTE' // Estado predeterminado
      },
      mensaje: '',
      isEditing: false
    };
  },
  created() {
    this.obtenerServicios();
  },
  methods: {
    async obtenerServicios() {
      try {
        const response = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio');
        this.servicios = response.data;
      } catch (error) {
        this.mensaje = 'Error al obtener servicios: ' + error.message;
      }
    },
    async guardarServicio() {
      try {
        if (this.isEditing) {
          await axios.put(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio/${this.servicio.idServicio}`, this.servicio);
          this.mensaje = 'Servicio actualizado correctamente.';
        } else {
          await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio', this.servicio);
          this.mensaje = 'Servicio solicitado correctamente.';
        }
        this.limpiarFormulario();
        this.obtenerServicios();
      } catch (error) {
        this.mensaje = 'Error al guardar servicio: ' + error.message;
      }
    },
    editarServicio(servicio) {
      this.servicio = { ...servicio };
      this.isEditing = true;
    },
    async cancelarServicio(id) {
      try {
        await axios.delete(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio/${id}`);
        this.mensaje = 'Servicio cancelado correctamente.';
        this.obtenerServicios();
      } catch (error) {
        this.mensaje = 'Error al cancelar servicio: ' + error.message;
      }
    },
    limpiarFormulario() {
      this.servicio = {
        idServicio: null,
        mascota: { id: null },
        veterinario: { id: null },
        direccion: '',
        estado: 'PENDIENTE'
      };
      this.isEditing = false;
      this.mensaje = '';
    }
  }
};
</script>

<style scoped>
body {
  background-color: #f8f9fa;
}
</style>
