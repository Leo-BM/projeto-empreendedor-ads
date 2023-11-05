<template>
  <div :class="messageClass" class="rounded-xl w-fit min-w-[50%] px-2 py-1">
    <span>{{ message.text }}</span>
    <button v-for="option in message.options">{{ option }}</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    messageClass() {
      return {
        "self-start": this.message.type === "bot",
        "self-end": this.message.type === "user",
        "bg-green-400": this.message.type === "user",
        "bg-gray-300": this.message.type === "bot",
      };
    },
  },
};
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
