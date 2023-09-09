<template>
<Default>
  <div class="text-center flex flex-col space-y-8">
    <h1>Agendar Consulta</h1>
    <div class="" v-if="fase == 1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="doctor">
        Selecione uma especialidade
      </label>
      <Select2
        class="w-full"
        url="/schedule/specialtys/5"
        v-model="especialidade"
        index-label="desc_especialidade"
      />
    </div>
    <div class="" v-if="fase === 1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="doctor">
        Selecione o médico desejado
      </label>
      <Select2
        class="w-full"
        url="/schedule/specialtys/5"
        v-model="especialidade"
        index-label="desc_especialidade"
      />
    </div>
    <div v-if="fase == 1">
      <div>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="full_name"
        >
          Informe o mês desejado para consultar a disponibilidade
        </label>
      </div>
      <select v-model="consulta">
        <option value="">Selecione</option>
        <option value="9">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
      </select>
    </div>
    <div v-if="fase == 1">
      <button @click="fase = 2" class="btn-primary">
        Consultar disponibilidade de agenda
      </button>
    </div>
    <div v-if="fase == 2" class="mx-4 flex flex-col space-y-4">
      <button @click="fase = 1" class="block self-start">Voltar</button>
      <Calendar :mes="consulta" />
      <ul class="flex flex-col space-y-2 !mb-8">
        <li
          class="btn-primary !px-3 !py-2 text-sm !bg-slate-400 !text-black"
          v-for="horario in horarios"
        >
          {{ horario }}
        </li>
      </ul>
      <button class="btn-primary">Confirmar agendamento</button>
    </div>
  </div>
</Default>
</template>

<script setup>
import { ref } from "vue";
import Default from '@/Layouts/Default.vue';
import Select2 from "../../Components/Select2.vue";
import Calendar from "../../Components/Calendar.vue";

const especialidade = ref();

const consulta = ref({
  mes: 0
})

const fase = ref(1);

const horarios = ref(["10:00 AM", "11:00 AM", "12:00 AM", "14:00 PM"]);
</script>

<style scoped></style>
