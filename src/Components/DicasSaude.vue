<template>
  <button @click="chatbotModal = true" v-bind="$attrs">Dicas de Saúde</button>
  <SimpleModal v-model="chatbotModal">
    <Accordion />
  </SimpleModal>
</template>

<script setup>
import { ref } from "vue";

import SimpleModal from "@/Components/SimpleModal.vue";
import Accordion from "./Accordion.vue";
const chatbotModal = ref(false);
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
