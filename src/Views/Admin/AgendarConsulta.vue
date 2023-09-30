<template>
  <Default>
    <div class="text-center flex flex-col space-y-8">
      <h1 class="text-slate-600 font-bold text-xl mt-8">Agendar Consulta</h1>
      <div v-if="fase == 1">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="doctor">
          Selecione uma especialidade
        </label>
        <Select2
          class="rounded-md border-slate-600"
          url="/schedule/specialtys/6"
          v-model="idSpecialty"
          index-label="desc_especialidade"
        />
      </div>
      <div v-if="fase === 1 && idSpecialty">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="doctor">
          Selecione o médico desejado
        </label>
        <Select2
          v-if="idSpecialty"
          class="rounded-md text-slate-600"
          :url="`/schedule/professionals/6/${idSpecialty}/`"
          v-model="idProfessional"
          index-id="id_medico"
          index-label="nome_medico"
        />
      </div>
      <div v-if="fase == 1 && idSpecialty">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="full_name"
          >
            Informe o mês desejado para consultar a disponibilidade
          </label>
        </div>
        <select class="rounded-md text-slate-600">
          <option disabled value="">Selecione</option>
          <option value="10" selected>Outubro</option>
        </select>
      </div>
      <div v-if="fase == 1 && idSpecialty">
        <button @click="fase = 2" class="btn-primary">
          Consultar disponibilidade de agenda
        </button>
      </div>
      <div v-if="fase == 2" class="mx-4 flex flex-col space-y-4 px-8">
        <Calendar
          @appointments="appointments"
          month="10"
          :url="`/schedule/dates/6/${idSpecialty}/${idProfessional}`"
        />
        <p v-if="!horarios.length">
          Toque na data acima para saber os horários disponivel para agendamento
          de consulta
        </p>
        <ul class="flex flex-col space-y-2 !mb-8">
          <li
            v-for="horario in horarios"
            class="btn-primary !px-3 !py-2 text-sm !bg-slate-400 !text-black cursor-pointer"
            :class="{
              '!bg-green-600 !text-white': horario.selected,
            }"
            @click="selectAppointment(horario)"
          >
            {{ horario.horario }}
          </li>
        </ul>
        <button class="btn-primary" @click="agendarConsulta">
          Confirmar agendamento
        </button>
      </div>
    </div>
  </Default>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import Default from "@/Layouts/Default.vue";
import Select2 from "../../Components/Select2.vue";
import Calendar from "../../Components/Calendar.vue";
import api from "@/Utils/api";

const router = useRouter();

const idSpecialty = ref();
const idProfessional = ref();
const idSchedule = ref();

const fase = ref(1);
const horarios = ref([]);

watch(idSpecialty, () => {
  idProfessional.value = null;
});

function appointments(data) {
  horarios.value = data;
}

function selectAppointment(horario) {
  horarios.value.forEach((h) => (h.selected = false));
  horario.selected = true;

  idSchedule.value = horario.id_agenda;
}

async function agendarConsulta() {
  const user = JSON.parse(localStorage.getItem("usuario"));

  const agendar = await api.post(
    `/schedule/appointment/${idSchedule.value}/${user.id}`
  );

  Swal.fire({
    toast: true,
    timer: 3000,
    timerProgressBar: true,
    position: "top-right",
    icon: "success",
    text: agendar.data.mensagem,
    showConfirmButton: false,
  });
  router.push({ name: "DashboardPage" });
}
</script>

<style scoped></style>
