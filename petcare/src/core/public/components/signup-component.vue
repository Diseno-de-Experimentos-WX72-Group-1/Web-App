<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      phone: '',
      address: '',
      password: '',
      rol: 'client', // Agrega esta línea para definir el valor por defecto
      roles: [
        { label: 'Cliente', value: 'client' },
        { label: 'Veterinario', value: 'veterinarian' }
      ]
    }
  },
}
</script>

<template>
  <div class="signup-header"/>

  <div class="container">
    <div class="signup-box">
      <div class="signup-title">
        <h1>Registro en Pet&Care</h1>
      </div>
      <div class="form-group">
        <label for="name">Nombre</label>
        <pv-input-text id="name" v-model="name" class="input-field" placeholder="Ingrese su nombre"></pv-input-text>
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <pv-input-text id="email" v-model="email" class="input-field" placeholder="Ingrese su correo"></pv-input-text>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <pv-input-text id="password" type="password" v-model="password" class="input-field" placeholder="Ingrese su contraseña"></pv-input-text>
      </div>

      <div class="form-group">
        <label for="phone">Teléfono</label>
        <pv-input-text id="phone" v-model="phone" class="input-field" placeholder="Ingrese su teléfono" mask="(999) 999-9999"></pv-input-text>
      </div>
      <div class="form-group">
        <label for="address">Dirección</label>
        <pv-input-text id="address" v-model="address" class="input-field" placeholder="Ingrese su dirección"></pv-input-text>
      </div>

      <div class="form-group">
        <label for="role">Rol</label>
        <pv-select id="role" v-model="rol" :options="roles" optionLabel="label" class="select-field"/>

      </div>
      <div class="button-container">
        <RouterLink to="/">
          <pv-button id="btSignup" class="signup-button">Registrarse</pv-button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signup-header{
  height: 10vh;
  margin-bottom: 15px;
  background-color: #376eec;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh; /* Centrado vertical y horizontal */
  background-color: #f0f0f0;
}

.signup-box {
  display: inline-block; /* Ajusta el tamaño del cuadro al contenido */
  background-color: white;
  padding: 1rem 6rem 1rem 6rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Centra el texto dentro del signup-box */
  min-width: 300px; /* Define un ancho mínimo para evitar que sea demasiado estrecho */
}

.signup-title h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #376eec;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-field,
.select-field {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-container {
  text-align: center;
  margin-top: 50px;
}

.signup-button {
  padding: 10px 20px;
  border: 2px solid #007bff; /* Marco alrededor del botón */
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Transición suave */
}

.signup-button:hover {
  background-color: white;
  color: #007bff;
}
</style>