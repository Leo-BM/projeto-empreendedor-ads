<template>
  <Default>
    <fieldset
      class="flex flex-wrap justify-center mt-32 px-5 text-center border-2 border-slate-600 mx-6"
    >
      <legend
        class="mt-[-0.8rem] bg-white px-2 text-lg absolute left-4 text-slate-600"
      >
        Início
      </legend>
      <RouterLink class="btn-primary !p-4" :to="{ name: 'AgendarConsulta' }"
        >Agendar consulta</RouterLink
      >
      <RouterLink class="btn-primary !p-4" :to="{ name: 'AgendarVacina' }"
        >Agendar vacina</RouterLink
      >
      <RouterLink class="btn-primary !p-4" :to="{ name: 'ConsultasAgendadas' }"
        >Consultas Agendadas</RouterLink
      >
      <RouterLink class="btn-primary !p-4" :to="{ name: 'AgendarExamePage' }"
        >Agendar exame</RouterLink
      >
      <RouterLink class="btn-primary !p-4" :to="{ name: 'BuscarFarmaciasPage' }"
        >Buscar Farmacias</RouterLink
      >
      <RouterLink class="btn-primary !p-4" :to="{ name: 'BuscarHospitaisPage' }"
        >Buscar Hospitais</RouterLink
      >
    </fieldset>
  </Default>
</template>

<script setup>
import Default from "@/Layouts/Default.vue";
</script>

<style scoped>
.btn-primary {
  @apply w-36 text-center m-4;
}
</style>
