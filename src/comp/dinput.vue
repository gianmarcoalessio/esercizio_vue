<template>
  <div class="px-2">
  <label class="text-sm text-blue-500">{{ label }}</label>
  <input type="text" class="block px-4 mb-1 w-full bg-red-300" :value="modelValue" @input="changeValue('modelValue',$event)"/>
  <input type="text" class="block px-4 mb-1 bg-blue-300 w-full" :value="primo" @input="changeValue('primo', $event)"/>
  <input type="text" class="block px-4 mb-3 bg-gray-300 w-full" :value="secondo" @input="changeValue('secondo',$event)"/>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {type: String, default: 'prova'},
    primo: {type: String},
    secondo: {type: String},
    label: String,
  },
  emits: ['update:modelValue','update:primo','update:secondo'],
  data() {
    return {
    }
  },
  methods: {
    changeValue(m,t) {
      this.$emit(`update:${m}`,t.target.value);
    }
  }
};
</script>

