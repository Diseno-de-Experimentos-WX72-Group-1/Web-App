<template>
    <div class="container mt-5">
      <h2 class="mb-4">Solicitud de Servicio a Domicilio</h2>
  
      <form @submit.prevent="guardarServicio" class="mb-4">
        <div class="mb-3">
          <label for="mascotaId" class="form-label">Selecciona Mascota:</label>
          <select id="mascotaId" v-model="servicio.mascota.id" class="form-control" required>
            <option v-for="mascota in mascotas" :key="mascota.id" :value="mascota.id">
              {{ mascota.nombre }} - {{ mascota.especie }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="veterinarioId" class="form-label">Selecciona Veterinario:</label>
          <select id="veterinarioId" v-model="servicio.veterinario.id" class="form-control" required>
            <option v-for="veterinario in veterinarios" :key="veterinario.id" :value="veterinario.id">
              {{ veterinario.nombre }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="direccion" class="form-label">Dirección:</label>
          <input type="text" id="direccion" v-model="servicio.direccion" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Solicitar Servicio</button>
      </form>
  
      <!-- Mensaje de alerta -->
      <div v-if="mensaje" class="alert alert-info">{{ mensaje }}</div>
      <div v-else class="alert alert-warning">Prueba para ver si el mensaje se muestra correctamente.</div> <!-- Mensaje de prueba -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mascotas: [],
        veterinarios: [],
        servicio: {
          idServicio: null,
          mascota: {
            id: null
          },
          veterinario: {
            id: null
          },
          direccion: '',
          estado: 'PENDIENTE'
        },
        mensaje: ''
      };
    },
    created() {
      this.cargarMascotas();
      this.cargarVeterinarios();
    },
    methods: {
      async cargarMascotas() {
        try {
          const response = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/mascotas');
          this.mascotas = response.data;
        } catch (error) {
          this.mensaje = 'Error al obtener mascotas: ' + error.message;
        }
      },
      async cargarVeterinarios() {
        try {
          const responseVeterinarios = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas/usuarios/veterinarios');
          this.veterinarios = responseVeterinarios.data;
        } catch (error) {
          this.mensaje = 'Error al obtener veterinarios: ' + error.message;
        }
      },
      async guardarServicio() {
        try {
          const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio', this.servicio);
          this.mensaje = 'Su solicitud ha sido procesada y pronto el especialista estará en su hogar';
          console.log(response); // Verifica la respuesta
          this.resetForm();
        } catch (error) {
          this.mensaje = 'Error al guardar el servicio: ' + error.message;
        }
      },
      resetForm() {
        this.servicio = {
          idServicio: null,
          mascota: {
            id: null
          },
          veterinario: {
            id: null
          },
          direccion: '',
          estado: 'PENDIENTE'
        };
        this.mensaje = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales aquí si es necesario */
  </style>
  