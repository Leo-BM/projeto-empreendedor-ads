<template>
  <Default>
    <h1 class="text-center text-slate-600 py-8">
      Olá, bem vindo às suas <span class="font-bold">Avaliações Físicas</span>
    </h1>
    <div class="px-8">
      <ul class="px-3 py-2 space-y-4">
        <li
          v-for="consulta in avaliacoes"
          class="bg-slate-600 text-white px-3 py-2 rounded-md"
        >
          <table class="w-full">
            <tbody>
              <tr>
                <td>Peso</td>
                <td>{{ consulta.peso }} Kg</td>
              </tr>
              <tr>
                <td>Altura</td>
                <td>{{ consulta.altura }} cm</td>
              </tr>
              <tr>
                <td>Porcentagem de gordura</td>
                <td>
                  <span v-show="consulta.porcentagem_gordura">
                    {{ consulta.porcentagem_gordura }}%
                  </span>
                </td>
              </tr>
              <tr>
                <td>Metabolismo basal</td>
                <td>{{ consulta.metabolismo_basal }} kal</td>
              </tr>
              <tr>
                <td>Data da avaliação</td>
                <td>
                  {{ format(new Date(consulta.data_avaliacao), "dd/M/Y") }}
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  </Default>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { format } from "date-fns";
import { useRouter } from "vue-router";
import Default from "@/Layouts/Default.vue";
import api from "@/Utils/api";

const router = useRouter();

const avaliacoes = ref([]);

const user = ref(JSON.parse(localStorage.getItem("usuario")));

onMounted(async () => {
  const response = await api.get(`/user/physicalassessment/${user.value.id}`);
  avaliacoes.value = response.data.dados;
});
</script>

<style scoped>
li::after {
  content: "";
  display: block;
  clear: both;
}
tr td:nth-child(2) {
  @apply text-right;
}
</style>
