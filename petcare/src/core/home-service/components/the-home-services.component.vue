<script setup>
import { ref } from "vue";

const selectedService = ref();
const services = ref([
  { name: 'Consulta Veterinaria a Domicilio', code: 'CV' },
  { name: 'Aseo y cuidado a Domicilio', code: 'AC' }
]);
</script>

<template>
  <h1>Servicios a Domicilio</h1>
  <div class="servicio flex flex-row flex-wrap gap-4 p-4 my-3 ">
    <div class="flex align-items-center justify-content-center">
      <img alt="user header" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFALxM0Y7r0KFCaoDK6asvoXs6bqKfsy7nQ&s" />
    </div>
    <div class="flex flex-column">
      <h2>Consulta Veterinaria a Domicilio</h2>
      <p>Ofrecemos consultas veterinarias en la comodidad de tu hogar. </p>
    </div>
  </div>
  <div class="servicio flex flex-row flex-wrap gap-4 p-4 my-3">
    <div class="flex align-items-center justify-content-center">
      <img class="max-w-18rem" alt="user header" src="https://cdn.nubika.es/wp-content/uploads/2024/03/14082002/higiene-animales.jpg" />
    </div>
    <div class="flex flex-column">
      <h2>Aseo y cuidado a Domicilio</h2>
      <p>Disfruta de servicios de aseo y cuidado para tus mascotas sin salir de casa. </p>
    </div>
  </div>
  <div class="form p-4">
    <h2>Solicita un Servicio</h2>
    <div class="field">
      <label for="firstname1">Nombre:</label>
      <pv-input-text id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
      <label for="lastname1">Correo Electrónico:</label>
      <pv-input-text id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
      <label for="lastname1">Teléfono:</label>
      <pv-input-text id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
      <label for="state">Servicio Solicitado</label>
      <pv-select v-model="selectedService" :options="services" optionLabel="name" placeholder="Selecciona un servicio" class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary">
        <option>Consulta Veterinaria a Domicilio</option>
        <option>Aseo y Cuidado a Domicilio</option>
      </pv-select>
    </div>
    <div class="field">
      <label for="address">Detalles adicionales</label>
      <pv-textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></pv-textarea>
    </div>
    <div class="form-button">
      <pv-button class="pvbutton w-full">Solicitar Servicio</pv-button>
    </div>
  </div>
</template>

<style scoped>
h1, h2 {
  color: #007bff;
}

.form, .servicio {
  background-color: #F6F7F9;
}

input, select, textarea {
  background-color: #ffffff;
}
</style>