<template>
    <div>
      <h1>Programar Cita Veterinaria</h1>
      <form @submit.prevent="programarCita">
        <div>
          <label for="mascota">Mascota</label>
          <select v-model="mascotaId" required>
            <option v-for="mascota in mascotas" :key="mascota.id" :value="mascota.id">
              {{ mascota.nombre }}
            </option>
          </select>
        </div>
  
        <div>
          <label for="veterinario">Veterinario</label>
          <select v-model="veterinarioId" required>
            <option v-for="veterinario in veterinarios" :key="veterinario.id" :value="veterinario.id">
              {{ veterinario.nombre }}
            </option>
          </select>
        </div>
  
        <div>
          <label for="fechaCita">Fecha de la Cita</label>
          <input v-model="fechaCita" type="datetime-local" required />
        </div>
  
        <div>
          <label for="motivo">Motivo</label>
          <input v-model="motivo" type="text" placeholder="Motivo de la cita" required />
        </div>
  
        <button type="submit">Programar Cita</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mascotaId: null,
        veterinarioId: null,
        fechaCita: '',
        motivo: '',
        mascotas: [],
        veterinarios: [],
      };
    },
    methods: {
      async programarCita() {
        try {
          const cita = {
            clienteId: 1, // El ID del cliente (se puede obtener desde el contexto de sesión)
            veterinarioId: this.veterinarioId,
            mascotaId: this.mascotaId,
            fechaCita: this.fechaCita,
            motivo: this.motivo,
          };
  
          const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas/programar', cita);
          console.log(response.data);
          alert('Cita programada exitosamente');
        } catch (error) {
          console.error('Error al programar la cita', error);
          alert('Hubo un error al programar la cita');
        }
      },
      async obtenerMascotas() {
        try {
          const response = await axios.get('http://localhost:8080/api/mascotas');
          this.mascotas = response.data;
        } catch (error) {
          console.error('Error al obtener mascotas', error);
        }
      },
      async obtenerVeterinarios() {
        try {
          const response = await axios.get('http://localhost:8080/api/usuarios/veterinarios');
          this.veterinarios = response.data;
        } catch (error) {
          console.error('Error al obtener veterinarios', error);
        }
      },
    },
    mounted() {
      this.obtenerMascotas();
      this.obtenerVeterinarios();
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  button {
    margin-top: 16px;
  }
  </style>
  