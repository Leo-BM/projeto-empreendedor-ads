<template>
  <Default>
    <div class="mt-60 flex justify-center items-center flex-wrap">
      <RouterLink class="btn-primary !p-5" :to="{ name: 'AgendarConsulta' }"
        >Agendar consulta</RouterLink
      >
      <RouterLink class="btn-primary !p-5" :to="{ name: 'ConsultasAgendadas' }"
        >Consultas Agendadas</RouterLink
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

<style scoped>
.btn-primary {
  @apply mx-4 my-4;
}
</style>
