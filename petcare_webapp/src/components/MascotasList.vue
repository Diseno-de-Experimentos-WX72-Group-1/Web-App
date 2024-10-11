<template>
  <div class="container mt-5">
   <h1 class="text-center">Lista de Mascotas</h1>
    <!--<button @click="irADescripcion" class="btn btn-primary">Solicitar Servicio a Domicilio</button>-->
    <form @submit.prevent="guardarMascota" class="mb-4">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="mascota.nombre" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="especie">Especie:</label>
        <input type="text" v-model="mascota.especie" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="raza">Raza:</label>
        <input type="text" v-model="mascota.raza" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="edad">Edad:</label>
        <input type="number" v-model="mascota.edad" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">
        {{ editMode ? 'Actualizar Mascota' : 'Registrar Mascota' }}
      </button>
    </form>

    <h2 class="text-center">Listado de Mascotas</h2>
    <ul class="list-group mb-4">
      <li v-for="mascota in mascotas" :key="mascota.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>{{ mascota.nombre }}</strong> - {{ mascota.especie }}
        </div>
        <div>
          <button @click="editarMascota(mascota)" class="btn btn-warning btn-sm">Editar</button>
          <button @click="eliminarMascota(mascota.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>
    </ul>
    
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      mascotas: [],
      mascota: {
        id: null,
        nombre: '',
        especie: '',
        raza: '',
        edad: 1,
        duenio: {
          id: null,
        },
      },
      editMode: false,
      userId: null,
    };
  },
  created() {
    this.userId = this.$route.params.id; // Obtén el ID del dueño desde los parámetros de la ruta
    this.cargarMascotas(); // Carga las mascotas al iniciar el componente
  },
  methods: {
    irADescripcion() {
        // Redirige a la vista de descripción pasando el userId
        this.$router.push({ name: 'solicitarserviciocliente', params: { id: this.userId } });
      },
    async cargarMascotas() {
      // Cargar las mascotas asociadas al ID del dueño
      const response = await fetch(`/api/mascotas?duenoId=${this.userId}`);
      if (response.ok) {
        this.mascotas = await response.json();
      } else {
        console.error("Error al cargar las mascotas:", response.statusText);
      }
    },
    async guardarMascota() {
      this.mascota.duenio.id = this.userId;

      const method = this.editMode ? 'PUT' : 'POST';
      const url = this.editMode ? `/api/mascotas/${this.mascota.id}` : '/api/mascotas/registrar';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...this.mascota,
          duenio: { id: this.mascota.duenio.id },
        }),
      });

      if (response.ok) {
        this.limpiarFormulario();
        this.cargarMascotas(); // Recarga la lista de mascotas
      } else {
        console.error("Error al guardar la mascota:", response.statusText);
      }
    },
    limpiarFormulario() {
      this.mascota = {
        id: null,
        nombre: '',
        especie: '',
        raza: '',
        edad: 1,
        duenio: {
          id: null,
        },
      };
      this.editMode = false;
    },
    editarMascota(mascota) {
      this.mascota = { ...mascota, duenio: { id: mascota.duenio.id } };
      this.editMode = true;
    },
    async eliminarMascota(id) {
      const confirmDelete = confirm("¿Estás seguro de que deseas eliminar esta mascota?");
      if (confirmDelete) {
        const response = await fetch(`/api/mascotas/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          this.cargarMascotas(); // Recargar la lista de mascotas
        } else {
          console.error("Error al eliminar la mascota:", response.statusText);
        }
      }
    },
  },
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
