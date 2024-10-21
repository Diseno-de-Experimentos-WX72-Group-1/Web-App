<template>
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
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        idCita: this.$route.params.idCita || null, // Obtener el ID de la cita desde los parámetros de la ruta
        resumen: '',
        mensaje: null // New property for message handling
      };
    },
    methods: {
      async generarReporte() {
        try {
          const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/reportes/generar', {
            idCita: this.idCita,
            resumen: this.resumen,
            
            
          });
          
          this.mensaje = { text: 'Reporte generado exitosamente', success: true };
          this.idCita = null;
          this.resumen = '';
          console.log(response)
        } catch (error) {
          this.mensaje = { text: 'Error al generar el reporte: ' + error.message, success: false };
          console.error('Error al generar el reporte:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos aquí */
  </style>
  