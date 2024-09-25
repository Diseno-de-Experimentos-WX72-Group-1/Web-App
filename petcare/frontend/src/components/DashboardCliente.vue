<template>
  <div class="container mt-5 text-center">
    <h1 class="mb-4">¡Bienvenido, Usuario {{ userId }}!</h1>
    <p class="lead">Estamos encantados de tenerte aquí. ¿Qué te gustaría hacer hoy?</p>
    
    <!-- Botón para redirigir a otra vista -->
    <button @click="irADescripcion" class="btn btn-primary btn-lg mb-3">
      Ir a Descripción de Mascotas
    </button>
    
    <!-- Otros contenidos -->
    
      <h2>Otras Opciones:</h2>
      <div class="d-flex justify-content-center flex-wrap">
        <button class="btn btn-secondary m-2" @click="irAOtraOpcion">Otra Opción 1</button>
        <button class="btn btn-secondary m-2" @click="irAOtraOpcion">Otra Opción 2</button>
        <button class="btn btn-secondary m-2" @click="irAOtraOpcion">Otra Opción 3</button>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'NuevaVista',
  data() {
    return {
      userId: this.$route.params.id, // Accede al id del usuario desde los parámetros de la ruta
    };
  },
  mounted() {
    // Puedes hacer algo con el userId, como cargar datos del usuario
  },
  methods: {
    irADescripcion() {
      // Redirige a la vista de descripción pasando el userId
      this.$router.push({ name: 'mascotasusuario', params: { id: this.userId } });
    },
    irAOtraOpcion() {
      // Aquí puedes implementar la lógica para otras opciones
      console.log('Otra opción seleccionada');
      // Redirección a otra vista si es necesario
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para mejorar la apariencia */
.container {
  max-width: 600px; /* Limitar el ancho del contenedor */
  background-color: #f8f9fa; /* Fondo claro */
  border-radius: 8px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

h1 {
  color: #007bff; /* Color azul para el título */
}

.btn-lg {
  padding: 10px 20px; /* Tamaño del botón grande */
}
</style>
