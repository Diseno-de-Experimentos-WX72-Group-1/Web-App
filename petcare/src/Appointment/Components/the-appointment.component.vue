<script setup>

</script>

<template>
  <h1 class="text-center">Citas Disponibles</h1>
  <div class="flex flex-row flex-wrap justify-content-center gap-3">
    <div class="flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #content>
          <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
          <div class="doctor">
            <h1>Dra. Pérez </h1>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Fecha:
              </p>
              <p> 10 de Septiembre, 2024</p>
            </div>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Hora:
              </p>
              <p> 10:00 AM</p>
            </div>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Motivo:
              </p>
              <p> Revisión general</p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <pv-button label="Reservar Cita" class="w-full" />
          </div>
        </template>
      </pv-card>
    </div>
    <div class="flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #content>
          <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
          <div class="doctor">
            <h1>Dra. Rodríguez </h1>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Fecha:
              </p>
              <p> 12 de Septiembre, 2024</p>
            </div>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Hora:
              </p>
              <p> 02:00 PM</p>
            </div>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Motivo:
              </p>
              <p> Vacunación general</p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <pv-button label="Reservar Cita" class="w-full" />
          </div>
        </template>
      </pv-card>
    </div>
    <div class="flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #content>
          <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
          <div class="doctor">
            <h1>Dra. Díaz</h1>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Fecha:
              </p>
              <p> 14 de Septiembre, 2024</p>
            </div>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Hora:
              </p>
              <p> 01:00 PM</p>
            </div>
            <div class="flex flex-row flex-wrap justify-content-center gap-1">
              <p>
                Motivo:
              </p>
              <p> Limpieza general</p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <pv-button label="Reservar Cita" class="w-full" />
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #3b82f6;
}
</style>