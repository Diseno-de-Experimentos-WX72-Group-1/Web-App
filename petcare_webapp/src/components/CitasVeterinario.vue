<template>
  <div v-if="esVeterinario">
    <h2>Lista de Citas (Veterinario)</h2>
    <ul>
      <li v-for="cita in citas" :key="cita.id">
        <p>Cita para: {{ cita.mascota }}</p>
        <p>Dueño: {{ cita.dueno }}</p>
        <p>Fecha: {{ cita.fecha }}</p>
        <p>Hora: {{ cita.hora }}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No tienes acceso a esta información.</p>
  </div>
</template>

<script>
import citaService from "@/services/citaService";

export default {
  data() {
    return {
      citas: [],
      esVeterinario: false,
    };
  },
  created() {
    this.verificarAcceso();
    this.cargarCitas();
  },
  methods: {
    verificarAcceso() {
      const usuarioActual = JSON.parse(localStorage.getItem("usuario"));
      if (usuarioActual && usuarioActual.rol === "veterinario") {
        this.esVeterinario = true;
      }
    },
    cargarCitas() {
      citaService.obtenerCitas()
        .then((response) => {
          this.citas = response.data;
        })
        .catch((error) => {
          console.error("Error al cargar las citas: ", error);
        });
    },
  },
};
</script>
