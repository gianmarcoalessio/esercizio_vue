<template>
    <div class="p-3  w-full">
    <h2>input multiplo esempio</h2>
  <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" :value="username" @input="changeValue('username',$event)" placeholder="username">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" :value="name" @input="changeValue('name',$event)" placeholder="name">
   <input type="text" class="block w-full text-center mb-2 rounded-md px-2 py-1" :value="modelValue" @input="changeValue('modelValue',$event)" placeholder="email">
   <p v-text="modelValue" class="block w-full bg-gray-200 text-center text-black h-12 mb-2 rounded-md px-2 py-1" @blur="changeP($event)"  contenteditable="true"></p>
   </div>
</template>

<script>
export default {
    props: {
        name:{type: String, default:''},
        username: {type: String, default:''},
        modelValue: {type: String, default:''},
    },
    //emits: ["update:name", "update:username", "update:modelValue"],
    methods: {
    changeValue(m,t) {
      console.log(m,t.target);
      this.$emit(`update:${m}`,t.target.value);
    },
    changeP(t) {
      console.log(t.target);
      this.$emit(`update:modelValue`,t.target.innerText);
   
    }
  }

}
</script>

<style>

</style>