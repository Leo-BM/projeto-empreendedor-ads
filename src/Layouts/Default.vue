<template>
  <div class="h-screen">
    <MainLogo :show-subtitle="false" :logoLink="'DashboardPage'" class="m-2">
      <template #link>
        <RouterLink :to="{ name: 'homePage' }" class="mr-4 btn-primary"
          >Sair</RouterLink
        >
      </template>
    </MainLogo>
    <header class="mt-4">
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'DashboardPage' }">Início</RouterLink>
          </li>
          <li>
            <a href="javascript:;">Exames</a>
          </li>
          <li>
            <a href="javascript:;">Consultas</a>
          </li>
          <li>
            <a href="javascript:;">Vacinas</a>
          </li>
          <li>
            <a href="javascript:;">Aval.</a>
          </li>
          <li>
            <a href="javascript:;">Help</a>
          </li>
        </ul>
      </nav>
    </header>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import MainLogo from "../Components/MainLogo.vue";

const props = defineProps({
  logoLink: String,
});
</script>

<style scoped>
ul {
  @apply flex justify-between;
}
li {
  @apply block flex-1 text-center;
}

ul li:not(:first-child) a::after {
  position: absolute;
  top: 0;
  display: block;
  content: "";
  height: 100%;
  border-right: 2px solid rgb(71 85 105);
}

ul li a {
  @apply block relative text-slate-600;
}
</style>
