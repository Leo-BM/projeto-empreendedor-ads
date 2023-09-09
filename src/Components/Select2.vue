<template>
  <div>
    <select v-if="options.length" @change="$emit('update:modelValue', this)">
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.label }}
      </option>
    </select>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import api from "../Utils/api";

const props = defineProps({ url: String, indexLabel: String });
const options = ref([]);
const selectedOption = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    const response = await api.get(props.url);
    let dados = response.data.dados.map((i) => ({
      label: i[props.indexLabel],
      id: i.id,
    }));
    console.log(dados);
    options.value = [{label: "Selecione", id: null}, ...dados ];
  } catch (err) {
    console.log(err);
    error.value = "Erro ao buscar os dados";
  }
};

onMounted(fetchData);
</script>

<style scoped>
/* Seu CSS aqui */
</style>
