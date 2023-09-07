<template>
  <div>
    <h1>SISC</h1>
    <div class="flex space-x-4 justify-center items-center flex-wrap h-screen">
      <RouterLink class="btn-primary !p-5" :to="{ name: 'AgendarConsulta' }"
      >Agendar consulta</RouterLink
      >
      <!-- <RouterLink class="btn" :to="{ name: AgendarExameView }">Agendar exame</RouterLink> -->
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
