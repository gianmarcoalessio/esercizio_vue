<template>
  <div class="p-2 relative">
      <button class="absolute top-1 right-2 text-sm m-2" @click="cancella()">X</button>
    <div class="border-gray-300 border rounded-md bg-gray-200 p-2">
      <p class="text-sm text-gray-500">{{ user.name }}</p>
      <input type="text" v-model="user.name">
      <p class="text-2xl font-bold text-red-400">
        {{ user.username }}
      </p>
      <p class="font-serif font-extrabold text-xs">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
    //props: proprietà che ha l'argomento, l'argomento è il nome user 
    props:{
        user:{
            type: Object,
            default: {},
        }
    },
    methods: {
        cancella(){
            this.$emit("cancella")
            console.log("cancella")
        }
    }
};
</script>

<style>
</style>