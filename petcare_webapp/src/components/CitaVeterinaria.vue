<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Programar Cita Veterinaria ...</h2>
    <form @submit.prevent="programarCita" class="shadow p-4 bg-light rounded">
      <div class="form-group">
        <label for="fechaCita">Fecha de Cita:</label>
        <input type="date" id="fechaCita" v-model="cita.fechaCita" class="form-control" required />
      </div>

      <div class="form-group">
        <label for="horaCita">Hora de Cita:</label>
        <input type="time" id="horaCita" v-model="cita.horaCita" class="form-control" required />
      </div>

      <div class="form-group">
        <label for="motivo">Motivo:</label>
        <input type="text" id="motivo" v-model="cita.motivo" class="form-control" placeholder="Motivo de la cita" required />
      </div>

      <!-- Desplegable de Mascotas -->
      <div class="form-group">
        <label for="mascotaId">Mascota:</label>
        <select v-model="cita.idMascota" id="mascotaId" class="form-control" required>
          <option v-for="mascota in mascotas" :key="mascota.id" :value="mascota.id">
            {{ mascota.nombre }}
          </option>
        </select>
      </div>

      <!-- Desplegable de Veterinarios -->
      <div class="form-group">
        <label for="veterinarioId">Veterinario:</label>
        <select v-model="cita.idVeterinario" id="veterinarioId" class="form-control" required>
          <option v-for="veterinario in veterinarios" :key="veterinario.id" :value="veterinario.id">
            {{ veterinario.nombre }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary btn-block">Programar Cita</button>
    </form>

    <div v-if="mensaje" class="alert alert-info mt-3">{{ mensaje }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cita: {
        fechaCita: '',
        horaCita: '',
        motivo: '',
        idMascota: null,
        idVeterinario: null
      },
      mensaje: '',
      mascotas: [], // Lista de mascotas
      veterinarios: [] // Lista de veterinarios
    };
  },
  methods: {
    async programarCita() {
      try {
        const citaConMascota = {
          ...this.cita,
          mascota: { id: this.cita.idMascota },
          veterinario: { id: this.cita.idVeterinario }
        };

        const response = await axios.post('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas/programar', citaConMascota);
        this.mensaje = 'Cita programada exitosamente: ' + response.data.id;

        // Reiniciar el formulario
        this.cita = {
          fechaCita: '',
          horaCita: '',
          motivo: '',
          idMascota: null,
          idVeterinario: null
        };
      } catch (error) {
        if (error.response) {
          this.mensaje = 'Error en la respuesta: ' + error.response.data.message;
        } else if (error.request) {
          this.mensaje = 'Error: No se pudo contactar con el servidor';
        } else {
          this.mensaje = 'Error: ' + error.message;
        }
      }
    },
    async cargarDatos() {
      try {
        // Obtener mascotas
        const responseMascotas = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas/mascotas');
        this.mascotas = responseMascotas.data;

        // Obtener veterinarios con rol de veterinario
        const responseVeterinarios = await axios.get('https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas/usuarios/veterinarios');
        this.veterinarios = responseVeterinarios.data;
      } catch (error) {
        console.error('Error cargando datos: ', error);
      }
    }
  },
  mounted() {
    // Cargar las mascotas y veterinarios al cargar el componente
    this.cargarDatos();
  }
};
</script>

<style scoped>
h2 {
  font-size: 28px;
  color: #333;
}

.alert {
  font-weight: bold;
}
</style>
