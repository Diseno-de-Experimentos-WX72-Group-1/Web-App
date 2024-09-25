<template>
  <div class="container">
    <h2 class="text-center my-4">Gestión de Citas Veterinarias</h2>

    <!-- Formulario para Programar o Editar Cita -->
    <form @submit.prevent="guardarCita" class="mb-4">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="fechaCita" class="form-label">Fecha de Cita:</label>
          <input type="date" id="fechaCita" v-model="cita.fechaCita" class="form-control" required />
        </div>
        <div class="col-md-6 mb-3">
          <label for="horaCita" class="form-label">Hora de Cita:</label>
          <input type="time" id="horaCita" v-model="cita.horaCita" class="form-control" required />
        </div>
      </div>
      <div class="mb-3">
        <label for="motivo" class="form-label">Motivo:</label>
        <input type="text" id="motivo" v-model="cita.motivo" class="form-control" required />
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="mascotaId" class="form-label">ID de Mascota:</label>
          <input type="number" id="mascotaId" v-model="cita.mascota.id" class="form-control" required />
        </div>
        <div class="col-md-6 mb-3">
          <label for="veterinarioId" class="form-label">ID de Veterinario:</label>
          <input type="number" id="veterinarioId" v-model="cita.veterinario.id" class="form-control" required />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        {{ isEditing ? 'Actualizar Cita' : 'Programar Cita' }}
      </button>
    </form>

    <div v-if="mensaje" class="alert alert-info">{{ mensaje }}</div>

    <!-- Lista de Citas -->
    <h3>Citas Programadas</h3>
    <table class="table table-bordered">
      <thead class="table-light">
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Motivo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cita in citas" :key="cita.id">
          <td>{{ cita.id }}</td>
          <td>{{ cita.fechaCita }}</td>
          <td>{{ cita.horaCita }}</td>
          <td>{{ cita.motivo }}</td>
          <td>
            <button @click="editarCita(cita)" class="btn btn-warning btn-sm">Editar</button>
            <button @click="generarReporte(cita.id)" class="btn btn-info btn-sm">Generar Reporte</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      citas: [],
      cita: {
        id: null,
        fechaCita: '',
        horaCita: '',
        motivo: '',
        mascota: { id: null },
        veterinario: { id: null }
      },
      mensaje: '',
      isEditing: false
    };
  },
  created() {
    this.obtenerCitas();
  },
  methods: {
    async obtenerCitas() {
      try {
        const response = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas');
        this.citas = response.data;
      } catch (error) {
        this.mensaje = 'Error al obtener citas: ' + error.message;
      }
    },
    async guardarCita() {
      try {
        if (this.isEditing) {
          await axios.put(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas/${this.cita.id}`, this.cita);
          this.mensaje = 'Cita actualizada exitosamente';
        } else {
          const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas/programar', this.cita);
          this.mensaje = 'Cita programada exitosamente: ' + response.data.id;
        }

        // Limpiar el formulario
        this.cita = {
          id: null,
          fechaCita: '',
          horaCita: '',
          motivo: '',
          mascota: { id: null },
          veterinario: { id: null }
        };
        this.isEditing = false;
        this.obtenerCitas();
      } catch (error) {
        this.mensaje = 'Error al guardar la cita: ' + error.response?.data?.message || error.message;
      }
    },
    editarCita(cita) {
      this.cita = {
        id: cita.id,
        fechaCita: cita.fechaCita,
        horaCita: cita.horaCita,
        motivo: cita.motivo,
        mascota: { id: cita.mascota.id },
        veterinario: { id: cita.veterinario.id }
      };
      this.isEditing = true;
    },
    generarReporte(id) {
      this.$router.push({ name: 'reporte', params: { idCita: id } });
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
