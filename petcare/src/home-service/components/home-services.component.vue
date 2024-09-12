<script setup>

</script>

<template>
  <h1>Servicios a Domicilio</h1>
  <div class="servicio flex flex-row flex-wrap gap-4 p-4 my-3 ">
    <div class="flex align-items-center justify-content-center">
      <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
    </div>
    <div class="flex flex-column">
      <h2>Consulta Veterinaria a Domicilio</h2>
      <p>Ofrecemos consultas veterinarias en la comodidad de tu hogar. </p>
    </div>
  </div>
  <div class="servicio flex flex-row flex-wrap gap-4 p-4 my-3">
    <div class="flex align-items-center justify-content-center">
      <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
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
      <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>
    <div class="field">
      <label for="lastname1">Correo Electrónico:</label>
      <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>
    <div class="field">
      <label for="lastname1">Teléfono:</label>
      <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>
    <div class="field">
      <label for="state">Servicio Solicitado</label>
      <select id="state" class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style="appearance: auto">
        <option>Consulta Veterinaria a Domicilio</option>
        <option>Aseo y Cuidado a Domicilio</option>
      </select>
    </div>
    <div class="field">
      <label for="address">Detalles adicionales</label>
      <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
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