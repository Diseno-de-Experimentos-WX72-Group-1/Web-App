<script setup>

</script>

<template>
  <h1 class="text-center">Citas Disponibles</h1>
  <div class="flex flex-row flex-wrap justify-content-center gap-3">
    <div class="tarjeta flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #content>
          <img alt="user header" class="small-image " src="https://th.bing.com/th/id/OIP.OrTb7ccNwDF4JfH-t7sZhgHaHF?rs=1&pid=ImgDetMain" />
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
          <div class="pvbutton flex gap-4 mt-1">
            <pv-button label="Reservar Cita" class="w-full" />
          </div>
        </template>
      </pv-card>
    </div>
    <div class="tarjeta flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #content>
          <img alt="user header" class="small-image " src="https://th.bing.com/th/id/R.4780127e831650a6700f6e67f626cb85?rik=mwPg7pyIOp%2fgpA&pid=ImgRaw&r=0" />
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
          <div class="pvbutton flex gap-4 mt-1">
            <pv-button label="Reservar Cita" class="w-full" />
          </div>
        </template>
      </pv-card>
    </div>
    <div class="tarjeta flex align-items-center justify-content-center text-center">
      <pv-card style="width: 25rem; overflow: hidden">
        <template #content>
          <img alt="user header" class="small-image" src="https://th.bing.com/th/id/R.26c48f293c08aa2c89b55e3afd8b5364?rik=1KK0RVgsIeEu2w&pid=ImgRaw&r=0" />
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
          <div class="pvbutton flex gap-4 mt-1">
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
.small-image {
  width: 300px; 
  height: auto;
}

.tarjeta {
  background-color: white;
  border-radius: 8px;
  padding-right: 8px;
  padding-left: 8px;
}
</style>