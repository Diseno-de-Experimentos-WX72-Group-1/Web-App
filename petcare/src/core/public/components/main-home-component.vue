<script>

</script>

<template>
  <div class="main-home">
    <RouterLink to="login-veterinarian" class="left-section">
      <img src="https://universidadeuropea.com/resources/media/images/medicina-veterinaria-1200x630.original.jpg" alt="Left Image"/>
    </RouterLink>

    <RouterLink to="signup" class="center-section">
      <pv-button class="signup-button">No tienes cuenta? Regístrate aquí.</pv-button>
    </RouterLink>

    <RouterLink to="login-user" class="right-section">
      <img src="https://www.rockandpop.cl/wp-content/uploads/2018/04/Perro-y-su-due%C3%B1o-e1525102759254.jpg" alt="Right Image"/>
    </RouterLink>
  </div>
</template>


<style scoped>
.main-home {
  display: flex;
  height: 98vh;
  align-items: stretch;
  justify-content: space-between;
  background-color: #f0f4f8;
}

.left-section, .right-section {
  width: 45%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px  #b2ebf2;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.left-section img, .right-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.center-section {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signup-button {
  background-color: #84a5ef;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.signup-button:hover {
  background-color: #4fc3f7;
}
</style>