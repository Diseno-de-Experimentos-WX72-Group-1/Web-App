<script setup>

</script>

<template>
  <div class="header text-center">
    <h1 class="titulo text-blue-500 font-semibold">La solución integral para el cuidado de tus mascotas</h1>
    <p>Gestiona citas veterinarias, recibe recordatorios automáticos y accede a servicios a domicilio con Pet&Care.</p>
  </div>
  <div class="flex flex-row flex-wrap justify-content-center gap-3 py-5">
    <div class="tarjeta flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #title>Programación de Citas</template>
        <template #content>
          <img alt="user header" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLrFqQ_PFox-lTib0X48RyWY1zbZzgMwfdw&s" />
          <p class="m-0">
            Programa fácilmente las citas con tu veterinario y recibe recordatorios automáticos.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <RouterLink to="/">
              <pv-button label="Programar cita" class="pvbutton w-full" />
            </RouterLink>>
          </div>
        </template>
      </pv-card>
    </div>
    <div class="tarjeta flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #title>Servicios a domicilio</template>
        <template #content>
          <img alt="user header" class="small-image"  src="https://static.vecteezy.com/system/resources/previews/004/808/886/non_2x/little-cute-animal-doctor-veterinarian-dog-puppy-cartoon-pet-health-care-vector.jpg" />
          <p class="m-0">
            Solicita servicios veterinarios a domicilio para la comidad de tu mascota.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <RouterLink to="/">
              <pv-button label="Servicio a Domicilio" class="pvbutton w-full" />
            </RouterLink>
          </div>
        </template>
      </pv-card>
    </div>
    <div class="tarjeta flex align-items-center justify-content-center text-center py-4">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #title>Historial Médico</template>
        <template #content>
          <img alt="user header" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkrY55fg8_Y4cdyFqCT0nZjcLjKVbMSrjCQ&s" />
          <p class="m-0">
            Accede al historial médico de tu mascota y lleva un control de sus tratamientos.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <pv-button label="Historial Médico" class="pvbutton w-full" />
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.header{
  color : #376eec;
}

.header p {
  color: black;
}
.small-image {
  width: 200px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
}
.pvbutton {
  padding: 10px 20px;
  border: 2px solid #007bff; /* Marco alrededor del botón */
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Transición suave */
}
.tarjeta {
  background-color: white;
  border-radius: 8px;
  padding-right: 8px;
  padding-left: 8px;
}
</style>