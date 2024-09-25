<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Registro de Usuario</h1>
    <form @submit.prevent="registrarUsuario" class="border p-4 rounded shadow-sm">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre:</label>
        <input 
          v-model="nombre" 
          id="nombre" 
          type="text" 
          class="form-control" 
          placeholder="Ingrese su nombre" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo:</label>
        <input 
          v-model="correo" 
          id="correo" 
          type="email" 
          class="form-control" 
          placeholder="Ingrese su correo" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="contraseña" class="form-label">Contraseña:</label>
        <input 
          v-model="contraseña" 
          id="contraseña" 
          type="password" 
          class="form-control" 
          placeholder="Ingrese su contraseña" 
          required 
        />
      </div>
      <button type="submit" class="btn btn-primary w-100 mb-2">Registrar</button>
      <div v-if="mensaje" class="alert alert-danger" role="alert">
        {{ mensaje }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistroComponent',
  data() {
    return {
      nombre: '',
      correo: '',
      contraseña: '',
      mensaje: '',
    };
  },
  methods: {
    async registrarUsuario() {
      try {
        const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/usuarios/registrar', {
          nombre: this.nombre,
          correo: this.correo,
          rol: 'dueno',
          contraseña: this.contraseña,
        });
        console.log(response.data);
        const userId = response.data.id; 
        this.$router.push({ name: 'DashboardCliente', params: { id: userId } });
      } catch (error) {
        console.error(error);
        this.mensaje = 'Error al registrar: ' + (error.response?.data || error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para mejorar la apariencia */
.container {
  max-width: 400px; /* Limitar el ancho del contenedor */
}

.border {
  border: 1px solid #e0e0e0; /* Agregar un borde */
}

.shadow-sm {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.alert {
  margin-top: 10px; /* Espacio adicional para la alerta de error */
}
</style>
