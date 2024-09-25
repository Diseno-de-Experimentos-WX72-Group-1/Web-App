<template>
  <div id="app">
    <div class="d-flex">
      <!-- Sidebar -->
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <h5 class="sidebar-heading">Dashboard</h5>
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/usuarios" class="nav-link">
                Usuarios
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/citas" class="nav-link">
                Programar Cita
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/listar_citas" class="nav-link">
                Listar Citas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/servicio_domicilio" class="nav-link">
                Servicio Domicilio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/historial_medico" class="nav-link">
                Historial Médico
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/generar_reporte" class="nav-link">
                Generar Reporte
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/lista_recordatorios" class="nav-link">
                Lista Recordatorios
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main content -->
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Bienvenido al Dashboard</h1>
        </div>

        <!-- Contenido del componente de gestión de usuarios -->
        <div class="container mt-4">
          <h2 class="text-center">Gestión de Usuarios</h2>

          <!-- Formulario de Usuario -->
          <form @submit.prevent="guardarUsuario" class="card p-4 mb-4 shadow-sm">
            <div class="form-group mb-3">
              <label for="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                class="form-control"
                v-model="usuario.nombre"
                required
                placeholder="Ingrese nombre"
              />
            </div>

            <div class="form-group mb-3">
              <label for="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                class="form-control"
                v-model="usuario.correo"
                required
                placeholder="Ingrese correo"
              />
            </div>

            <div class="form-group mb-3">
              <label for="contraseña">Contraseña:</label>
              <input
                type="password"
                id="contraseña"
                class="form-control"
                v-model="usuario.contraseña"
                required
                placeholder="Ingrese contraseña"
              />
            </div>

            <div class="form-group mb-4">
              <label for="rol">Rol:</label>
              <select id="rol" class="form-select" v-model="usuario.rol" required>
                <option value="dueno">Dueño</option>
                <option value="veterinario">Veterinario</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary w-100">
              {{ isEditing ? 'Actualizar Usuario' : 'Crear Usuario' }}
            </button>
          </form>

          <div v-if="mensaje" class="alert alert-info text-center">{{ mensaje }}</div>

          <!-- Lista de Usuarios -->
          <h3 class="text-center mb-3">Lista de Usuarios</h3>
          <table class="table table-bordered table-striped">
            <thead class="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.correo }}</td>
                <td>{{ usuario.rol }}</td>
                <td>
                  <button class="btn btn-warning btn-sm me-2" @click="editarUsuario(usuario)">
                    Editar
                  </button>
                  <button class="btn btn-danger btn-sm" @click="eliminarUsuario(usuario.id)">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        id: null,
        nombre: "",
        correo: "",
        contraseña: "",
        rol: "dueno",
      },
      mensaje: "",
      isEditing: false,
    };
  },
  created() {
    this.obtenerUsuarios();
  },
  methods: {
    async obtenerUsuarios() {
      try {
        const response = await axios.get("https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/usuarios");
        this.usuarios = response.data;
      } catch (error) {
        this.mensaje = "Error al obtener usuarios: " + error.message;
      }
    },
    async guardarUsuario() {
      try {
        if (this.isEditing) {
          await axios.put(
            `https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/usuarios/${this.usuario.id}`,
            this.usuario
          );
          this.mensaje = "Usuario actualizado exitosamente";
        } else {
          const response = await axios.post(
            "https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/usuarios",
            this.usuario
          );
          this.mensaje = "Usuario creado exitosamente: " + response.data.id;
        }

        this.usuario = { id: null, nombre: "", correo: "", contraseña: "", rol: "dueno" };
        this.isEditing = false;
        this.obtenerUsuarios();
      } catch (error) {
        this.mensaje =
          "Error al guardar usuario: " + error.response?.data?.message || error.message;
      }
    },
    editarUsuario(usuario) {
      this.usuario = { ...usuario };
      this.isEditing = true;
    },
    async eliminarUsuario(id) {
      try {
        await axios.delete(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/usuarios/${id}`);
        this.mensaje = "Usuario eliminado exitosamente";
        this.obtenerUsuarios();
      } catch (error) {
        this.mensaje = "Error al eliminar usuario: " + error.message;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.sidebar {
  height: 100vh; /* Altura completa */
}
</style>
