<template>
  <!-- Container principal do componente com alguns espaçamentos e centralização -->
  <div class="flex flex-col items-center p-8">
    <!-- Renderiza o mês e ano selecionados -->
    <div class="text-xl mb-4">
      <span class="first-letter:uppercase inline-block">{{
        `${translateMonth(selectedMonth)}`
      }}</span
      >/<span>{{ `${selectedYear}` }}</span>
    </div>
    <!-- Cabeçalho com os dias da semana -->
    <div class="flex justify-between w-full">
      <span v-for="day in daysOfWeek" :key="day" class="w-full">{{ day }}</span>
    </div>
    <!-- Renderiza cada semana do calendário -->
    <div
      v-for="week in weeks"
      :key="week"
      class="flex justify-between space-x-2 w-full mb-2"
    >
      <!-- Renderiza cada dia da semana -->
      <span
        v-for="day in week"
        :key="day"
        class="w-full border border-slate-700 cursor-not-allowed"
        :class="{ 'bg-red-400 !border-red-400 !cursor-pointer': day.available }"
        @click="listAppointments(day)"
        >{{ new Date(day.label).getDate() }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { useCalendar } from "../Composables/useCalendar"; // Importando o composable que gerencia o calendário
import { defineProps, defineEmits, onMounted, ref } from "vue";
import { format } from "date-fns";
import api from "../Utils/api";

const props = defineProps({
  url: String,
});

const emits = defineEmits(["appointments", "selectDay"]);

// Usando o composable useCalendar para obter as propriedades e funções necessárias
const {
  selectedMonth,
  selectedYear,
  weeks,
  setMonthAndGenerate,
  daysOfWeek,
  translateMonth,
} = useCalendar();

const respData = ref();

selectedMonth.value = new Date().getMonth() + 1;
selectedYear.value = new Date().getFullYear();

// Inicializando o calendário com a data atual assim que o componente é criado
setMonthAndGenerate(selectedMonth.value, selectedYear.value);

const fetchData = async () => {
  try {
    const response = await api.get(props.url);
    respData.value = response.data;

    // Usa o Set para filtrar datas unicas, usa Spread para usar o map
    const datas = [...new Set(respData.value.dados.map((i) => i.data))].map(
      (i) =>
        // Converte a data em Timestamp
        new Date(i + " 00:00:00").getTime()
    );

    weeks.value.map((semana) => {
      semana.map((dia) => {
        if (datas.some((d) => d === dia.label)) {
          dia.available = true;
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const listAppointments = (date) => {
  const dateF = format(new Date(date.label), "yyyy-MM-dd");
  emits("selectDay", dateF);
  let appointments = [];
  respData.value.dados.map((info) => {
    if (info.data === dateF) {
      appointments.push(info);
    }
  });
  emits("appointments", appointments);
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* Aqui, você pode adicionar estilos específicos para o componente se necessário */
</style>
