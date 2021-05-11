<template>
  <div class="m-5">
    <!-- v-model permette di creare un collegamento con una variabile locale dentro data in una variabile di ambiente -->
    <cInsert :user="persona" />
    <button
      @click="addUser()"
      class="ml-5 p-2 bg-yellow-400 rounded-md hover:bg-yellow-700 text-blue-900"
    >
      invia info
    </button>
    <pre class="text-white">
        {{persona}}
    </pre>
  </div>
  <div class="flex flex-wrap w-full text-blue-900">
    <div v-for="(u, i) in info" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <cScheda :user="u" @cancella="cancellaRiga(i)" />
    </div>
  </div>
  <pre class="text-white">
      {{info}}
  </pre>
</template>

<script>
import cInsert from "@comp/insertfunge.vue"
import cScheda from "@comp/scheda.vue";
export default {
  components: {
    cInsert,  
    cScheda,
  },
  data() {
    return {
      info: [],
      persona: {
        username: "",
        name: "",
        email: "",
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
    addUser() {
        var u = Object.assign({},this.persona) //var u =JSON.parse(JSON.stringify(this.persona))
      this.info.push(u);
      this.persona={
        username: "",
        name: "",
        email: "",
      }
    },
    cancellaRiga(parameter){
        this.info.splice(parameter,1)
    }
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