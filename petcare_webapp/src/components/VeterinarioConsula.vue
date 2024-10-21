<template>
    <div id="app">
      <div class="d-flex">
        <!-- Sidebar -->
    
        <!-- Main content -->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom shadow-sm">
          
            <button class="btn btn-outline-primary d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar">
              <i class="bi bi-list"></i>
            </button>
          </div>
  
          <!-- Historial Médico -->
          <div class="container mt-4">
            <h2 class="mb-4">Historial Médico</h2>
  
            <!-- Formulario para buscar historial de una mascota -->
            <form @submit.prevent="buscarHistorial" class="mb-4">
              <div class="input-group">
                <label class="input-group-text" for="idMascota">ID de Mascota:</label>
                <input
                  type="number"
                  id="idMascota"
                  v-model="idMascota"
                  required
                  class="form-control"
                  min="1"
                />
                <button type="submit" class="btn btn-primary">Buscar Historial</button>
              </div>
            </form>
  
            <!-- Mostrar mensaje de error si hay problemas -->
            <div v-if="mensaje" class="alert alert-danger" role="alert">
              {{ mensaje }}
            </div>
  
            <!-- Mostrar el historial médico -->
            <div v-if="historial.length > 0">
              <h3 class="mt-4">Historial Médico de Mascota ID: {{ idMascota }}</h3>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID Historial</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Veterinario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="registro in historial" :key="registro.idHistorial">
                    <td>{{ registro.idHistorial }}</td>
                    <td>{{ registro.descripcion }}</td>
                    <td>{{ registro.fecha }}</td>
                    <td>{{ registro.veterinario.nombre }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else-if="loading" class="alert alert-info" role="alert">
              Cargando historial médico...
            </div>
          </div>
  
          <!-- Rutas del contenido -->
          <router-view></router-view>
        </main>
  
        <!-- Offcanvas Sidebar for mobile -->
        
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'App',
    data() {
      return {
        idMascota: null,
        historial: [],
        mensaje: '',
        loading: false // New loading state
      };
    },
    methods: {
      async buscarHistorial() {
        this.loading = true; // Set loading to true before request
        this.mensaje = ''; // Reset message
        // Validación adicional
        if (this.idMascota <= 0) {
          this.mensaje = 'Por favor, ingrese un ID de mascota válido.';
          this.loading = false;
          return;
        }
        try {
          const response = await axios.get(`https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/historial-medico/mascota/${this.idMascota}`);
          this.historial = response.data;
          if (this.historial.length === 0) {
            this.mensaje = 'No se encontró historial médico para esta mascota.';
          }
        } catch (error) {
          this.mensaje = 'Error al buscar el historial médico: ' + error.message;
        } finally {
          this.loading = false; // Set loading to false after request
        }
      }
    }
  };
  </script>
  
  <style>
  .sidebar {
    height: 100vh;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); /* Sombra en el sidebar */
    padding-top: 20px;
  }
  
  .sidebar-heading {
    font-weight: bold;
    color: #007bff;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 10px;
    color: #333;
  }
  
  .nav-link:hover {
    background-color: #f8f9fa;
    border-radius: 5px;
  }
  
  .nav-link .bi {
    margin-right: 8px;
    font-size: 1.2rem;
  }
  
  .offcanvas-body .nav-link {
    font-size: 1rem;
    color: #007bff;
  }
  
  .alert {
    margin-top: 20px;
  }
  
  .table th {
    background-color: #007bff;
    color: white;
  }
  
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
  </style>
  