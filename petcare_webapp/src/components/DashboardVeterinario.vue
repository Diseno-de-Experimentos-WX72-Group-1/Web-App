<template>
  <div class="container mt-5">
    <h2 class="mb-4">Solicitud de Servicio a Domicilio</h2>
    <div class="alert alert-info" v-if="veterinarioNombre">
      ¡Hola, Dr(a). {{ veterinarioNombre }}! ¿Cómo podemos ayudarle hoy?
    </div>
    
    <button @click="irADescripcion" class="btn btn-primary mb-4">
      Consultar Historial Médico
    </button>

    <form @submit.prevent="guardarServicio" class="mb-4">
      <div class="mb-3">
        <label for="mascotaId" class="form-label">ID de Mascota:</label>
        <input 
          type="number" 
          id="mascotaId" 
          v-model="servicio.mascota.id" 
          class="form-control" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="veterinarioId" class="form-label">ID de Veterinario:</label>
        <input 
          type="number" 
          id="veterinarioId" 
          v-model="servicio.veterinario.id" 
          class="form-control" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="direccion" class="form-label">Dirección:</label>
        <input 
          type="text" 
          id="direccion" 
          v-model="servicio.direccion" 
          class="form-control" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="estado" class="form-label">Estado:</label>
        <select 
          id="estado" 
          v-model="servicio.estado" 
          class="form-select"
        >
          <option value="PENDIENTE">Pendiente</option>
          <option value="REALIZADO">Realizado</option>
          <option value="CANCELADO">Cancelado</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">
        {{ isEditing ? 'Actualizar Servicio' : 'Solicitar Servicio' }}
      </button>
    </form>

    <div v-if="mensaje" class="alert alert-info">{{ mensaje }}</div>

    <h3>Servicios Programados</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Dirección</th>
          <th>Fecha de Solicitud</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="servicio in servicios" :key="servicio.idServicio">
          <td>{{ servicio.idServicio }}</td>
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
      isEditing: false,
      veterinarioNombre: '' // Nombre del veterinario
    };
  },
  created() {
    this.obtenerServicios();
    this.obtenerNombreVeterinario(); // Cargar el nombre del veterinario al crear el componente
  },
  methods: {
    irADescripcion() {
      // Redirige a la vista de descripción
      this.$router.push({ name: 'VeterinarioConsulta2' });
    },
    async obtenerServicios() {
      try {
        const response = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio');
        const userId = this.$route.params.id; // Asegúrate de que userId es un número
        // Filtra los servicios para mostrar solo los del veterinario correspondiente
        this.servicios = response.data.filter(servicio => servicio.veterinario.id === Number(userId));
      } catch (error) {
        this.mensaje = 'Error al obtener servicios: ' + error.message;
      }
    },
    async obtenerNombreVeterinario() {
      try {
        const userId = this.$route.params.id; // Obtener el ID del veterinario desde los parámetros de la ruta
        const response = await axios.get(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/veterinarios/${userId}`);
        this.veterinarioNombre = response.data.nombre; // Asumimos que el nombre está en la respuesta
      } catch (error) {
        console.error('Error al obtener el nombre del veterinario: ', error);
      }
    },
    async guardarServicio() {
      try {
        if (this.isEditing) {
          await axios.put(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio/${this.servicio.idServicio}`, this.servicio);
          this.mensaje = 'Servicio actualizado exitosamente';
        } else {
          const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio', this.servicio);
          this.mensaje = 'Servicio solicitado exitosamente';
          console.log(response);
        }
        this.obtenerServicios(); // Refresca la lista
        this.resetForm(); // Resetea el formulario
      } catch (error) {
        this.mensaje = 'Error al guardar el servicio: ' + error.message;
      }
    },
    editarServicio(servicio) {
      this.servicio = { ...servicio };
      this.isEditing = true;
    },
    async cancelarServicio(id) {
      try {
        await axios.delete(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/servicios-domicilio/${id}`);
        this.mensaje = 'Servicio cancelado exitosamente';
        this.obtenerServicios(); // Refresca la lista
      } catch (error) {
        this.mensaje = 'Error al cancelar el servicio: ' + error.message;
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
      this.isEditing = false;
      this.mensaje = '';
    }
  }
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
.container {
  max-width: 800px; /* Limitar el ancho del contenedor */
  background-color: #f8f9fa; /* Fondo claro */
  border-radius: 8px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}
</style>
