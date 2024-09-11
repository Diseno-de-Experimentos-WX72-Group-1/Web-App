<script setup>

</script>

<template>
  <h1 class="NotfoundTitle">NotFound</h1>
  <div class="button">
    <RouterLink to="/">
      <pv-button :label="NotFoundButton" severity="info" raised :aria-label="NotFoundButton"/>
    </RouterLink>
    <RouterLink to="/">
      <pv-button id="btReturn" class="return-button">Regresar</pv-button>
    </RouterLink>
  </div>
</template>

<style scoped>
.NotfoundTitle
{
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>