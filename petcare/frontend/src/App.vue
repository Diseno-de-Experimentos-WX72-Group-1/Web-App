<template>
  <div id="app">
    <nav>
      
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Estilos opcionales222 */
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 1rem;
}
nav a {
  text-decoration: none;
  color: #007bff;
}
nav a:hover {
  text-decoration: underline;
}
</style>
