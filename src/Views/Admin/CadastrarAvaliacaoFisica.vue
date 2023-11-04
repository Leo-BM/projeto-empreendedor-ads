<template>
  <Default>
    <div class="text-center flex flex-col space-y-8 px-8">
      <h1 class="text-slate-600 font-bold text-xl mt-8">
        Cadastrar Avaliações Físicas
      </h1>
      <form @submit.prevent="save">
        <div>
          <input
            type="number"
            min="0"
            placeholder="Digite seu peso em Kg"
            v-model="form.weigth"
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            placeholder="Digite sua altura em Cm"
            v-model="form.heigth"
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            placeholder="Digite sua porcentagem de gordura"
            v-model="form.fatPercentage"
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            placeholder="Digite seu Metabolismo basal"
            v-model="form.basalMetabolism"
          />
        </div>

        <button class="btn-primary mt-6" type="submit">
          Cadastrar Avaliação Física
        </button>
      </form>
    </div>
  </Default>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Default from "@/Layouts/Default.vue";
import api from "@/Utils/api";
import Swal from "sweetalert2";

const router = useRouter();

const form = ref({});

const save = async () => {
  const empty = Object.entries(form.value).filter(
    (i) => i[1].toString().trim().length == 0
  );

  if (Object.values(form.value).length < 4 || empty.length > 0) {
    Swal.fire({
      icon: "warning",
      title: "Preencha todos os campos",
      showConfirmButton: false,
    });
    return false;
  }

  const user = JSON.parse(localStorage.getItem("usuario"));

  const salvar = await api.post(
    `/user/physicalassessment/${user.id}`,
    form.value
  );

  Swal.fire({
    toast: true,
    timer: 3000,
    timerProgressBar: true,
    position: "top-right",
    icon: "success",
    text: salvar.data.mensagem,
    showConfirmButton: false,
  });
  router.push({ name: "DashboardPage" });
};
</script>

<style scoped>
form div {
  @apply my-6;
}

form div input {
  @apply w-4/5;
}
</style>
