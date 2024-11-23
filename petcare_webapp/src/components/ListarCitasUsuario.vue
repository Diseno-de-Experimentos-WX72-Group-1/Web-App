<template>
  <div class="container">
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
    const idDuenio = this.$route.params.id;
    this.obtenerCitas(idDuenio);
  },
  methods: {
    async obtenerCitas(idDuenio) {
      try {
        const response = await axios.get('https://petcare-fcaze8atc5cpdte0.canadacentral-01.azurewebsites.net/api/citas');
        this.citas = response.data.filter(cita => cita.mascota.duenio.id === parseInt(idDuenio));
      } catch (error) {
        this.mensaje = 'Error al obtener citas: ' + error.message;
      }
    },
    async guardarCita() {
      try {
        if (this.isEditing) {
          await axios.put(`https://petcare-fcaze8atc5cpdte0.canadacentral-01.azurewebsites.net/api/citas/${this.cita.id}`, this.cita);
          this.mensaje = 'Cita actualizada exitosamente';
        } else {
          const response = await axios.post('https://petcare-fcaze8atc5cpdte0.canadacentral-01.azurewebsites.net/api/citas/programar', this.cita);
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
