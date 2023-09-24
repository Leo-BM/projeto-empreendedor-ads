<template>
  <div
    v-if="modelValue"
    class="fixed z-10 inset-0 overflow-y-auto grid place-items-center"
  >
    <!-- Camada de fundo (overlay) -->
    <div class="absolute inset-0 bg-black opacity-50" @click="closeModal"></div>

    <div
      class="relative p-4 w-screen h-screen bg-white rounded-lg overflow-hidden shadow-xl transform transition-all z-20"
    >
      <button @click="closeModal" class="absolute top-0 right-0 m-4">
        <span class="text-gray-700 hidden">&times;</span>
      </button>
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
