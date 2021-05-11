<template>
    <div class="p-3 flex flex-wrap w-full">
        <div class="w-1/12"></div>
        <div class="w-10/12">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" :value="username" @input="changeValue('username',$event)" placeholder="username">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" :value="name" @input="changeValue('name',$event)" placeholder="name">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" :value="email" @input="changeValue('email',$event)" placeholder="email">
   </div>
   </div>
</template>

<script>
export default {
    props: {
        name: String,
        username: String,
        email: String,
    },
    emits: ["update:name", "update:username", "update:email"],
    methods: {
    changeValue(m,t) {
        console.log(m,t.target.value)
      this.$emit(`update:${m}`,t.target.value);
    }
  }

}
</script>

<style>

</style>