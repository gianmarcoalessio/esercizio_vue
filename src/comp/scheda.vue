<template>
  <div class="p-2">
    <div class="border-gray-300 border rounded-md bg-gray-200 p-2">
      <p class="text-sm text-gray-500">{{ user.name }}</p>
      <p class="text-2xl text-center font-bold text-yellow-400 bg-giammi-scuro">
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
    }
};
</script>

<style>
</style>