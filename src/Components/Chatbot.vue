<template>
  <div class="h-screen flex flex-col">
    <div
      class="bg-green-500 rounded-md p-4 text-white flex items-center justify-between"
    >
      <div class="flex align-middle">
        <div class="rounded-full bg-gray-400 w-10 h-10 mr-4 inline-block">
          <img src="/flight-attendant.png" />
        </div>
        <span v-if="isBotTyping" class="p-2 text-white"
          >Atendente está digitando...</span
        >
        <span v-else> Atendente</span>
      </div>
      <button @click="$emit('close', true)">Sair</button>
    </div>

    <div class="flex-1 flex flex-col overflow-y-auto p-4 space-y-2">
      <Message v-for="msg in messages" :key="msg.id" :message="msg" />
    </div>

    <!-- Área de entrada de texto -->
    <div class="border-t p-2 flex items-center">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="Digite uma mensagem..."
        class="flex-1 rounded-lg p-2 border"
      />
      <button
        @click="sendMessage"
        class="ml-2 text-white w-10 h-10 rounded-full text-center"
      >
        <img class="w-6 block" src="/sendMessage.png" />
      </button>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";
import conversations from "../data/conversation";

export default {
  components: {
    Message,
  },
  data() {
    return {
      userInput: "",
      messages: [],
      isBotTyping: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.userInput.trim() !== "") {
        this.messages.push({ type: "user", text: this.userInput });

        this.isBotTyping = true;

        let userInput = this.userInput;

        setTimeout(() => {
          const conversation = conversations[userInput];

          const reply = conversation
            ? conversation.reply || conversation
            : "Desculpe, não entendi.";
          this.messages.push({ type: "bot", text: reply, options: false });
          this.isBotTyping = false;
        }, Number((Math.random() * 10).toFixed(0)) * 500);

        this.userInput = "";
      }
    },
  },
  emit: ["close"],
};
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
