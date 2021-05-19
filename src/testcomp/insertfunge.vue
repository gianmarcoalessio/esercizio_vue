<template>
    <div class="p-3 flex flex-wrap w-full">
        <div class="w-1/12"></div>
        <div class="w-10/12">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" v-model="user.username" placeholder="username">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" v-model="user.name" placeholder="name">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" v-model="user.email" placeholder="email">
   </div>
   </div>
</template>

<script>
export default {
    props: {
        user: Object
    },
}
</script>

<style>

</style>