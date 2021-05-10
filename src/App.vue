<template>
  <h1 class="text-3xl font-bold text-center mt-20">Sono Qui:</h1>
  <div>
      <h2>Testo: {{idtesto}}</h2>
      <h2>Testo1: {{idtesto1}}</h2>
      <h2>Testo2: {{idtesto2}}</h2>
  </div>


  <d-input v-model="idtesto" v-model:primo="idtesto1" v-model:secondo="idtesto2" label="labeltesto"  />
</template>

<script >
import {defineAsyncComponent } from 'vue'
//import dInput from "@comp/dinput.vue";
const dInput = defineAsyncComponent(() => import('@comp/dinput.vue'))
export default {
  components: { dInput },
  data() {
    return {
      idtesto: "app",
      idtesto1:"testo1",
      idtesto2:"testo2"
    };
  },
};
</script>
