<template>
  <div class="h-screen grid place-items-center">
    <div class="space-y-10">
      <div class="text-center">
        <MainLogo />
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

<script setup>
import MainLogo from "../../Components/MainLogo.vue";
</script>

<style scoped>
.acessos {
  @apply inline-block w-32 text-center;
}
</style>
