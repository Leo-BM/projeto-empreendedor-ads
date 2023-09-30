<template>
  <Default>
    <h1 class="text-center text-slate-600 py-8">
      Olá, bem vindo às suas <span class="font-bold">consultas agendadas</span>
    </h1>
    <div class="px-8">
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
            @click="acessarConsulta(agenda.id_agenda)"
          >
            Entrar na consulta
          </button>
        </li>
      </ul>
    </div>
    <SimpleModal v-model="iframeConsulta">
      <div class="w-full">
        <button class="btn-primary mb-2" @click="finishApointment">
          Finalizar Consulta
        </button>
        <iframe
          :src="`https://navve.studio/alpha/index.html?room=ConsultaRemota${idAgenda}&label=${user.email}&remote&screensharehide&effects&sl&hidetranslate&turn=navve;M28shauetSdf;turn:turn.sub.navve.studio:443&cbr&vd`"
          allow="autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;midi;geolocation;"
          frameborder="0"
          ref="iframeRef"
          class="w-full h-screen"
        ></iframe>
      </div>
    </SimpleModal>
  </Default>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useRouter } from "vue-router";
import Default from "@/Layouts/Default.vue";
import SimpleModal from "../../Components/SimpleModal.vue";
import api from "@/Utils/api";
import { format } from "date-fns";

const router = useRouter();

const agendas = ref([]);
const iframeConsulta = ref(false);
const idAgenda = ref(0);

const user = ref(JSON.parse(localStorage.getItem("usuario")));

onMounted(async () => {
  const response = await api.get(`/schedule/appointments/6/${user.value.id}/1`);
  agendas.value = response.data.dados;

  window.addEventListener("hangupCall", callEnded);
});

onBeforeUnmount(() => {
  window.removeEventListener("hangupCall", callEnded);
});

function finishApointment() {
  iframeConsulta.value = false;
  // Ajax para colocar a consulta como finalizada
  router.push({ name: "DashboardPage" });
}

function acessarConsulta(idAgenda) {
  iframeConsulta.value = true;
  idAgenda.value = idAgenda;
}

function callEnded() {
  alert("Chamada encerrada");
}
</script>

<style scoped>
li::after {
  content: "";
  display: block;
  clear: both;
}
</style>
