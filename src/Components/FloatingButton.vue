<template>
  <button
    @click="handleClick"
    class="fixed bottom-5 text-3xl font-bold right-5 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300"
  >
    ?
  </button>
  <SimpleModal v-model="chatbotModal">
    <div>
      <Chatbot @close="chatbotModal = false" />
    </div>
  </SimpleModal>
</template>

<script setup>
import { ref } from "vue";

import SimpleModal from "@/Components/SimpleModal.vue";
import Chatbot from "./Chatbot.vue";

const chatbotModal = ref(false);

const handleClick = () => {
  chatbotModal.value = true;
  console.log("Click");
};
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
