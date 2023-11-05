<template>
  <div
    v-if="modelValue"
    class="fixed z-10 inset-0 overflow-y-auto grid place-items-center"
  >
    <!-- Camada de fundo (overlay) -->
    <div class="absolute inset-0 bg-black opacity-50" @click="closeModal"></div>

    <div
      class="relative w-screen h-screen bg-white rounded-lg overflow-hidden shadow-xl transform transition-all z-20"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits();

function closeModal() {
  emit("update:modelValue", false);
}
</script>
