<template>
  <div
    :class="{
      'flex justify-between items-center': $slots.link,
    }"
  >
    <RouterLink
      :to="{ name: 'homePage' }"
      class="text-5xl underline font-bold text-slate-600"
      v-bind="$attrs"
      >SISC</RouterLink
    >
    <slot name="link"></slot>
    <h2 v-if="showSubtitle" class="text-slate-600 mt-4 block">
      Sistema integrado de saúde Caxias do Sul
    </h2>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  showSubtitle: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped></style>
