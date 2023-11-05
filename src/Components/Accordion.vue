<template>
  <div class="space-y-2">
    <div v-for="(item, index) in items" :key="index">
      <button
        @click="toggle(index)"
        class="w-full text-left p-2 bg-green-500 text-white rounded-t"
      >
        {{ item.title }}
      </button>
      <div
        v-if="activeIndex === index"
        class="border p-2 rounded-b border-green-500"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
import dicasSaude from "../data/dicas-saude";
export default {
  data() {
    return {
      activeIndex: null,
      items: dicasSaude,
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
