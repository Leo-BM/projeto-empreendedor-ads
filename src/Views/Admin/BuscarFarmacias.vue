<template>
  <Default>
    <h1>Buscar Farmacias</h1>
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="doctor">
        Aqui você pode consultar o preço de medicamentos em farmácias próximas e
        depois navegar até elas.
      </label>
      <Select2Obj
        class="w-full"
        url="/pharmacies/medicines"
        v-model="pharmacies"
      />
    </div>
  </Default>
</template>

<script setup>
import { ref, watch } from "vue";
import Swal from "sweetalert2";
import Default from "@/Layouts/Default.vue";
import Select2Obj from "../../Components/Select2Obj.vue";

const pharmacies = ref(null);

watch(pharmacies, () => {
  Swal.fire({
    title:
      "<span class='text-sm leading-none'>Esse medicamento foi encontrado na seguinte farmácia mais próxima</span>",
    text: `${pharmacies.value[0].nome_farmacia} - ${
      pharmacies.value[0].endereco
    } no valor de R$ ${pharmacies.value[0].valor.replace(".", ",")}`,
  });
  pharmacies.value = null;
});
</script>

<style scoped></style>
