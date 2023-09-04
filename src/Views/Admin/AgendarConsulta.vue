<template>
  <div>
    <h1>Agendar Consulta</h1>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="full_name">
        Selecione uma especialidade
      </label>
      <Select2
        class="w-full"
        url="/schedule/specialtys/5"
        v-model="especialidade"
        index-label="desc_especialidade"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Select2 from "../../Components/Select2.vue";

const especialidade = ref();
</script>

<style scoped></style>
