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
      :key="week.join('-')"
      class="flex justify-between space-x-2 w-full mb-2"
    >
      <!-- Renderiza cada dia da semana -->
      <span
        v-for="day in week"
        :key="day"
        class="w-full border border-slate-700"
        >{{ day }}</span
      >
    </div>
  </div>
</template>

<script>
import { useCalendar } from "../Composables/useCalendar"; // Importando o composable que gerencia o calendário
import { defineProps } from "vue";
export default {
  name: "CalendarComponent", // Nome do componente

  setup() {
    const props = defineProps({
        mes: Number,
        default: 1
    })
    // Usando o composable useCalendar para obter as propriedades e funções necessárias
    const {
      selectedMonth,
      selectedYear,
      weeks,
      setMonthAndGenerate,
      daysOfWeek,
      translateMonth,
    } = useCalendar();

    selectedMonth.value = new Date().getMonth() + 1;
    selectedYear.value = new Date().getFullYear();

    // Inicializando o calendário com a data atual assim que o componente é criado
    setMonthAndGenerate(selectedMonth.value, selectedYear.value);

    // Retornando as propriedades e funções que serão usadas no template do componente
    return {
      selectedMonth,
      selectedYear,
      daysOfWeek,
      weeks,
      translateMonth,
    };
  },
};
</script>

<style scoped>
/* Aqui, você pode adicionar estilos específicos para o componente se necessário */
</style>
