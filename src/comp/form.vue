<template>
  <div class="m-5">
    <!-- v-model permette di creare un collegamento con una variabile locale dentro data in una variabile di ambiente -->
    <input v-model="persona.nome" type="text" placeholder="Nome" />
    <input
      v-model="persona.cognome"
      class="ml-5"
      type="text"
      placeholder="Cognome"
    />
  </div>
  <div class="m-5">
    <input
      v-model="persona.numero"
      type="text"
      placeholder="Numero di telefono"
    />
    <button
      @click="getData()"
      class="ml-5 p-2 bg-yellow-400 rounded-md hover:bg-yellow-700 text-blue-900"
    >
      invia info
    </button>
  </div>
  <div class="flex flex-wrap w-full text-blue-900">
    <div v-for="(u, i) in info" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <cScheda :user="u" />
    </div>
  </div>
</template>

<script>
import cScheda from "@comp/scheda.vue";
export default {
  components: {
    cScheda,
  },
  data() {
    return {
      info: [],
      persona: {
        nome: "",
        cognome: "",
        numero: "",
      },
    };
  },
  //funzione che viene eseguita quando l'oggetto viene creato jcpForm
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.info = json));
  },
  methods: {
    getData() {
      this.info.push(this.persona);
    },
  },
};
</script>

<style>
h1 {
  color: #939393;
}
body {
  background: rgb(7, 30, 41);
}
</style>