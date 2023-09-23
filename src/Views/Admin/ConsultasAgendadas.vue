<template>
  <Default>
    <h1 class="text-center">
      Olá, bem vindo às suas <span class="font-bold">consultas agendadas</span>
    </h1>
    <div>
      <ul class="px-3 py-2 space-y-4">
        <li
          v-for="agenda in agendas"
          class="bg-slate-600 text-white px-3 py-2 rounded-md"
        >
          <p>Médico: {{ agenda.nome_medico }}</p>
          <p>Especialidade: {{ agenda.desc_especialidade }}</p>
          <p>
            Data/Hora: {{ format(new Date(agenda.data), "d/M/Y") }} -
            {{ agenda.horario }}
          </p>
          <button
            class="text-right bg-white text-slate-600 px-2 py-1 rounded-md float-right mt-4"
          >
            Entrar na consulta (Consulta{{ agenda.id_agenda }})
          </button>
        </li>
      </ul>
    </div>
  </Default>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Default from "@/Layouts/Default.vue";
import api from "@/Utils/api";
import { format } from "date-fns";

const agendas = ref([]);

const user = ref(JSON.parse(localStorage.getItem("usuario")));

onMounted(async () => {
  const response = await api.get(`/schedule/appointments/6/${user.value.id}/1`);

  agendas.value = response.data.dados;
});
</script>

<style scoped>
li::after {
  content: "";
  display: block;
  clear: both;
}
</style>
