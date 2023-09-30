<template>
  <div>
    <select
      v-if="options.length"
      @change="updateValue"
      v-bind="$attrs"
      class="text-slate-600"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :selected="option.selected == true"
        :disabled="option.disabled == true"
        :value="option.id"
      >
        {{ option.label }}
      </option>
    </select>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";
import api from "../Utils/api";

const props = defineProps({
  url: String,
  indexLabel: String,
  indexId: {
    type: String,
    default: "id",
  },
});
const emits = defineEmits(["update:modelValue"]);
const options = ref([]);
const selectedOption = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    const response = await api.get(props.url);
    let dados = response.data.dados.map((i) => ({
      label: i[props.indexLabel],
      id: i[props.indexId],
    }));
    options.value = [
      { label: "Selecione", disabled: true, selected: true, id: null },
      ...dados,
    ];
  } catch (err) {
    console.log(err);
    error.value = "Erro ao buscar os dados";
  }
};

function updateValue($event) {
  emits("update:modelValue", $event.target.value);
}

onMounted(fetchData);
</script>
