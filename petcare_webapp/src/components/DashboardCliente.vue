<template>
  <div class="container mt-5 text-center">
    <!--<h1 class="mb-4">¡Bienvenido, Usuario {{ userName }}!</h1>
    <p class="lead">Estamos encantados de tenerte aquí. ¿Qué te gustaría hacer hoy?</p>-->
    <div class="title">
      <h1 class="mb-4">La solución integral para el cuidado de tus mascotas</h1>
      <p class="lead">Gestiona citas veterinarias, recibe recordatorios automáticos y accede a servicios a domicilio con Pet&Care.</p>
    </div>

    
    <!-- Botón para redirigir a otra vista -->
    <button @click="irADescripcion" class="btn btn-primary btn-lg mb-3">
      Ver Mascotas
    </button>
    
    <!-- Otros contenidos -->
    
      <h2>Otras Opciones:</h2>
      <div class="d-flex justify-content-center flex-wrap">

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../assets/imagenes/user_dash1.png" alt="Card image cap" height="253" width="253" object-fit="contain"/>
          <div class="card-body">
            <h5 class="card-title">Programación de Citas</h5>
            <p class="card-text">Programa fácilmente las citas con tu veterinario y recibe recordatorios automáticos.</p>
            <button class="btn btn-secondary m-2" @click="irACitas">Programar Cita</button>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../assets/imagenes/user_dash2.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Servicios a Domicilio</h5>
            <p class="card-text">Solicita servicios veterinarios a domicilio para la comidad de tu mascota.</p>
            <button class="btn btn-secondary m-2" @click="irASevicios">Servicio a Domicilio</button>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../assets/imagenes/user_dash3.png" alt="Card image cap" height="253" width="253" object-fit="contain"/>
          <div class="card-body">
            <h5 class="card-title">Gestión de Citas</h5>
            <p class="card-text">Accede al historial de las citas a veterinarias y gestionalas a tu gusto.</p>
            <button class="btn btn-secondary m-2" @click="irAHistorial">Ver Citas</button>
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'NuevaVista',
  data() {
    return {
      userId: this.$route.params.id, // Accede al id del usuario desde los parámetros de la ruta
      userName: this.$route.params.name
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
    irACitas() {
      // Redirige a la vista de descripción pasando el userId
      this.$router.push({ name: 'CitaVeterinaria', params: { id: this.userId } });
    },
    irASevicios() {
      // Redirige a la vista de descripción pasando el userId
      this.$router.push({ name: 'solicitarserviciocliente', params: { id: this.userId } });
    },
    irAHistorial() {
      // Redirige a la vista de descripción pasando el userId
      this.$router.push({ name: 'ListarCitas', params: { id: this.userId } });
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para mejorar la apariencia */
.container {
  max-width: 1000px; /* Limitar el ancho del contenedor */
  background-color: #f8f9fa; /* Fondo claro */
  border-radius: 8px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

h1 {
  color: #007bff; /* Color azul para el título */
}

h2{
  margin: 20px;
}

.title {
  margin: 20px 0 50px 0;
}

.card{
  margin: 10px;
  justify-content: center;
}

.card-img-top{
  object-fit: contain;

}

.btn-lg {
  padding: 10px 20px; /* Tamaño del botón grande */
}
</style>
