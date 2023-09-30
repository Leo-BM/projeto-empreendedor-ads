<template>
  <div class="h-screen grid place-items-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-96 mx-auto relative">
      <RouterLink
        class="btn-primary !p-2 absolute top-3 right-3"
        :to="{ name: 'homePage' }"
        >Home</RouterLink
      >
      <div class="text-center">
        <MainLogo />
      </div>

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
        <label class="block text-slate-600 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border-2 rounded border-slate-600 w-full py-2 px-3 text-slate-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
          v-model="loginForm.password"
          placeholder="******************"
        />
        <!-- Mensagem de erro para senha -->
        <p class="text-red-500 text-xs italic hidden" id="passwordError">
          Sua senha está incorreta.
        </p>
      </div>
      <div class="text-center space-x-5">
        <button
          @click="submitLogin"
          class="btn-primary disabled:bg-slate-400"
          :disabled="processingLogin == true"
          type="button"
        >
          Entrar
        </button>
        <RouterLink
          class="btn-primary acessos"
          :to="{ name: 'registrationPage' }"
          >Inscreva-se</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import MainLogo from "../Components/MainLogo.vue";
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
      localStorage.setItem("usuario", JSON.stringify(response.data.dados));
      router.push({ name: "DashboardPage" });
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

<style scoped>
.acessos {
  @apply inline-block w-32 text-center;
}
</style>
