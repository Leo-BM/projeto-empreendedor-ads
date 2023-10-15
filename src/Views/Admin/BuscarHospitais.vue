<template>
  <Default>
    <div class="text-center flex flex-col space-y-8 px-8">
      <h1 class="text-slate-600 font-bold text-xl mt-8">Buscar Hospitais</h1>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="doctor">
          Aqui você pode consultar os hospitais mais perto de você.
        </label>
        <Select2Obj
          class="rounded-md border-slate-600"
          url="/hospitals"
          index-label="nome_hospital"
          index-id="idhospital"
          v-model="hospitals"
        />
      </div>
    </div>
  </Default>
</template>

<script setup>
import { ref, watch } from "vue";
import Swal from "sweetalert2";
import Default from "@/Layouts/Default.vue";
import Select2Obj from "../../Components/Select2Obj.vue";

const hospitals = ref(null);

watch(hospitals, () => {
  Swal.fire({
    title:
      "<span class='text-sm leading-none'>Esse hospital foi encontrado na seguinte localização</span>",
    text: `${hospitals.value.nome_hospital} - ${hospitals.value.endereco}`,
  });
  hospitals.value = null;
});
</script>

<style scoped></style>
