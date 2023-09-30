<template>
  <div class="h-screen grid place-items-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
      <div class="text-center">
        <MainLogo />
      </div>
      <!-- Mensagem de erro geral -->
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 invisible"
        :class="{ '!visible': registrationFailMessage.length != 1 }"
        id="generalError"
      >
        <span class="block sm:inline">{{ registrationFailMessage }}</span>
      </div>

      <!-- Campo de nome completo -->
      <div class="mb-4">
        <label
          class="block text-slate-600 text-sm font-bold mb-2"
          for="full_name"
        >
          Nome completo
        </label>
        <input
          class="shadow appearance-none border-2 rounded border-slate-600 w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
          id="full_name"
          v-model="registrationForm.full_name"
          type="text"
          placeholder="Nome completo"
        />
      </div>

      <!-- Campo de data de nascimento -->
      <div class="mb-4">
        <label
          class="block text-slate-600 text-sm font-bold mb-2"
          for="birth_date"
        >
          Data de nascimento
        </label>
        <input
          class="shadow appearance-none border-2 rounded border-slate-600 w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
          id="birth_date"
          v-model="registrationForm.birth_date"
          type="date"
          placeholder="Data de nascimento"
        />
      </div>

      <!-- Campo de e-mail -->
      <div class="mb-4">
        <label class="block text-slate-600 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border-2 rounded border-slate-600 w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          v-model="registrationForm.email"
          type="email"
          placeholder="Email"
        />
      </div>

      <!-- Campo de senha -->
      <div class="mb-6">
        <label
          class="block text-slate-600 text-sm font-bold mb-2"
          for="password"
        >
          Senha
        </label>
        <input
          class="shadow appearance-none border-2 rounded border-slate-600 w-full py-2 px-3 text-slate-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="registrationForm.password"
          placeholder="******************"
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          @click="submitRegistration"
          class="btn-primary disabled:bg-slate-400"
          :disabled="processingRegistration == true"
          type="button"
        >
          Inscrever-se
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

import MainLogo from "../Components/MainLogo.vue";

const registrationFailMessage = ref(".");
const processingRegistration = ref(false);

const router = useRouter();

const registrationForm = ref({
  email: "",
  full_name: "",
  birth_date: "",
  password: "",
  permission: 3,
});

function submitRegistration() {
  processingRegistration.value = true;
  axios
    .post("http://127.0.0.1:3000/v1/user/create", registrationForm.value, {
      headers: {
        Authorization:
          "6wDt7ENG4NuwOftlxZWdipfMIGiCIlXsLbqXISICK7RxD0jrbG5eF8jeyng33J9j7utpUV8JotExKkeieNit8woeysdj2dEbXr6jUk1zgnR4cnXIUN4lySymGcIAtHtl",
      },
    })
    .then((response) => {
      router.push({ name: "homePage" });
    })
    .catch((error) => {
      registrationFailMessage.value = error.response.data.mensagem;
      setTimeout(() => {
        registrationFailMessage.value = ".";
      }, 3000);
    })
    .finally(() => {
      processingRegistration.value = false;
    });
}
</script>

<style scoped>
.acessos {
  @apply inline-block w-32 text-center;
}
</style>
