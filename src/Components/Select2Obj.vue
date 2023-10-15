<template>
  <div>
    <select v-if="options.length" @change="updateValue" v-bind="$attrs">
      <option
        v-for="(option, idx) in options"
        :key="option.id"
        :selected="option.selected == true"
        :disabled="option.disabled == true"
        :value="idx"
      >
        {{ option[indexLabel] }}
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
  groupData: {
    type: String,
    default: "pharmacies",
  },
  indexId: {
    type: String,
    default: "id",
  },
});
const emits = defineEmits(["update:modelValue"]);
const options = ref([]);
const selectedOption = ref(null);
const error = ref(null);
const resData = ref();

const fetchData = async () => {
  try {
    const response = await api.get(props.url);
    resData.value = response.data.dados;
    // let dados = resData.value.map((i) => ({
    //   label: i.nome_hospital,
    //   pharmacies: resData.value[i],
    // }));
    options.value = [
      {
        [props.indexLabel]: "Selecione",
        disabled: true,
        selected: true,
        id: null,
      },
      ...resData.value,
    ];
  } catch (err) {
    console.log(err);
    error.value = "Erro ao buscar os dados";
  }
};

function updateValue($event) {
  emits("update:modelValue", resData.value[$event.target.value - 1]);
}

onMounted(fetchData);
</script>

<style scoped>
/* Seu CSS aqui */
</style>
