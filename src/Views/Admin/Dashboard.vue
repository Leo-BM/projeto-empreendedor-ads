<template>
  <div>
    <h1>SISC</h1>
    <div class="flex space-x-4 justify-center items-center flex-wrap h-screen">
      <RouterLink class="btn" :to="{ name: AgendarConsultaView }"
      >Agendar consulta</RouterLink
    >
    <RouterLink class="btn" :to="{ name: AgendarExameView }">Agendar exame</RouterLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.btn{
  @apply bg-slate-600 p-5 rounded-lg text-white font-bold
}
</style>
