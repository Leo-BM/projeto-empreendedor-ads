<template>
  <Default>
    <div class="flex space-x-4 justify-center items-center flex-wrap h-screen">
      <RouterLink class="btn-primary !p-5" :to="{ name: 'AgendarConsulta' }"
        >Agendar consulta</RouterLink
      >
      <RouterLink class="btn-primary !p-5" :to="{ name: 'AgendarExamePage' }"
        >Agendar exame</RouterLink
      >
      <RouterLink class="btn-primary !p-5" :to="{ name: 'BuscarFarmaciasPage' }"
        >Buscar Farmacias</RouterLink
      >
    </div>
  </Default>
</template>

<script setup>
import Default from "@/Layouts/Default.vue";
</script>

<style scoped></style>
