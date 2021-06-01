<template>
  <h1 class="text-3xl text-base-500 text-center mt-20">{{ voce }}</h1>
  <div class="w-full">
    <button class="btn" @click="main()">Main</button>
    <button class="btn" @click="windowBack()">back</button>
    <button class="btn" @click="altro()">altro</button>
    <button class="btn" @click="plug()">plug</button>
  </div>
</template>

<script>
import {random} from "@eng/utils";

export default {
  data() {
    return {
      voce: "init",
    };
  },
  beforeRouteUpdate(to,from) {
      this.autoreload(to.params);
  },
  mounted() {
     this.autoreload(this.$route.params)
  },
  methods: {
    autoreload(p) {
      this.voce = `reload: ${p.id}`;
    },

    main() {
      this.$router.push("/");
    },
    altro() {
        this.$router.push(`/altro/${random(1,200)}`);
    },
    plug() {
      console.log(this.$translate('prova a scrivere un testo'));

    }
    
  },
};
</script>

<style>
</style>