<template>
  <div class="container mt-5">
    <h1 class="text-center">Inicio de Sesión</h1>
    <form @submit.prevent="iniciarSesion" class="mt-4">
      <div class="mb-3">
        <label for="correo" class="form-label">Correo:</label>
        <input 
          v-model="loginRequest.correo" 
          id="correo" 
          type="email" 
          class="form-control" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="contraseña" class="form-label">Contraseña:</label>
        <input 
          type="password" 
          v-model="loginRequest.contraseña" 
          id="contraseña" 
          class="form-control" 
          required 
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
    </form>
    
    <div v-if="mensaje" class="mt-3 alert alert-danger" role="alert">
      {{ mensaje }}
    </div>

    <!-- Botón de registrarse -->
    <div class="text-center mt-3">
      <p>¿No tienes una cuenta? <router-link to="/registro" class="btn btn-link">Registrarse</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from '../utils/axios';

export default {
  data() {
    return {
      loginRequest: {
        correo: '',
        contraseña: '',
      },
      mensaje: '',
    };
  },
  methods: {
    async iniciarSesion() {
      try {
        const response = await axios.post('/usuarios/login', this.loginRequest);
        const rol = response.data.rol; // Ahora deberías poder obtener el rol

        // Redirige según el rol
        if (rol === 'dueno') {
          const userId = response.data.id; 
          this.$router.push({ name: 'DashboardCliente', params: { id: userId } });
        } else if (rol === 'veterinario') {
          const userId = response.data.id; 
          this.$router.push({ name: 'DashboardVeterinario', params: { id: userId } });
        } else if (rol === 'admin') {
          const userId = response.data.id; 
          this.$router.push({ name: 'DassboardCiita', params: { id: userId } });
        } else {
          this.mensaje = 'Rol de usuario no reconocido';
        }
        
      } catch (error) {
        this.mensaje = 'Error al iniciar sesión: ' + (error.response?.data || error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
