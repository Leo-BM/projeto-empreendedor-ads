<template>
  <div>
    <h1 class="text-3xl text-center">
      Boas vindas ao SISC
      <span class="text-xs">Sistema integrado de saúde Caxias </span>
    </h1>
    <div>
      <RouterLink :to="{ name: 'loginPage' }">Login</RouterLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
