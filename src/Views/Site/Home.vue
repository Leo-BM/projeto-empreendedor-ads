<template>
  <div class="h-screen grid place-items-center">
    <div class="space-y-10">
      <div class="text-center">
        <h1 class="text-5xl underline font-bold mb-4 text-slate-600">SISC</h1>
        <h2 class="text-slate-600">Sistema integrado de saúde Caxias do Sul</h2>
      </div>
      <div class="text-center space-x-5">
        <RouterLink class="btn-primary acessos" :to="{ name: 'loginPage' }"
          >Login</RouterLink
        >
        <RouterLink
          class="btn-primary acessos"
          :to="{ name: 'registrationPage' }"
          >Inscreva-se</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.acessos {
  @apply inline-block w-32 text-center;
}
</style>
