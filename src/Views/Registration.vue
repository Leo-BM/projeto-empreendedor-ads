<template>
  <div class="bg-white p-8 rounded-lg shadow-md w-96">
    <h1 class="text-2xl font-bold mb-4">Registre-se</h1>
    <span class="text-black">{{ registrationForm }}</span>

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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="full_name">
        Nome completo
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="full_name"
        v-model="registrationForm.full_name"
        type="text"
        placeholder="Nome completo"
      />
    </div>

    <!-- Campo de data de nascimento -->
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="birth_date"
      >
        Data de nascimento
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="birth_date"
        v-model="registrationForm.birth_date"
        type="date"
        placeholder="Data de nascimento"
      />
    </div>

    <!-- Campo de e-mail -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        v-model="registrationForm.email"
        type="email"
        placeholder="Email"
      />
    </div>

    <!-- Campo de senha -->
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Senha
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        v-model="registrationForm.password"
        placeholder="******************"
      />
      <!-- Mensagem de erro para senha -->
      <p class="text-red-500 text-xs italic hidden" id="passwordError">
        Sua senha está incorreta.
      </p>
    </div>

    <div class="flex items-center justify-between">
      <button
        @click="submitRegistration"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-400"
        :disabled="processingRegistration == true"
        type="button"
      >
        Entrar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

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
      router.push({ name: "DashboardPage" });
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

<style scoped></style>
