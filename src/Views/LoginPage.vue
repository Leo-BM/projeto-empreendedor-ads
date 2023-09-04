<template>
  <div class="bg-white p-8 rounded-lg shadow-md w-96">
    <h1 class="text-2xl font-bold mb-4">Login</h1>

    <!-- Mensagem de erro geral -->
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 invisible"
      :class="{ '!visible': loginFailMessage.length != 1 }"
      id="generalError"
    >
      <span class="block sm:inline">{{ loginFailMessage }}</span>
    </div>

    <!-- Campo de email -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        v-model="loginForm.email"
        type="email"
        placeholder="Email"
      />
      <!-- Mensagem de erro para email -->
      <p class="text-red-500 text-xs italic hidden" id="emailError">
        Insira um email válido.
      </p>
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
        v-model="loginForm.password"
        placeholder="******************"
      />
      <!-- Mensagem de erro para senha -->
      <p class="text-red-500 text-xs italic hidden" id="passwordError">
        Sua senha está incorreta.
      </p>
    </div>
    <div class="text-center">
      <RouterLink class="text-black text-base" :to="{name: 'registrationPage'}">Cadastre-se aqui</RouterLink>
    </div>

    <div class="flex items-center justify-end">
      <button
        @click="submitLogin"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-400"
        :disabled="processingLogin == true"
        type="button"
      >
        Entrar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../Utils/api";

const loginFailMessage = ref(".");
const processingLogin = ref(false);

const router = useRouter();

const loginForm = ref({
  email: "",
  password: "",
});

function submitLogin() {
  processingLogin.value = true;
  api
    .post("/login", loginForm.value)
    .then((response) => {
      router.push({ name: "DashboardView" });
    })
    .catch((error) => {
      loginFailMessage.value = error;
      setTimeout(() => {
        loginFailMessage.value = ".";
      }, 3000);
    })
    .finally(() => {
      processingLogin.value = false;
    });
}
</script>

<style scoped></style>
