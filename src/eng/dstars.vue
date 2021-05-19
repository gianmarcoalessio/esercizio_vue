<template>
<span>
      <span v-for="x in [1,2,3,4,5]" class="pr-1" :class="getclass()" :key="x" @click.prevent="setvalue(x)" >{{getvalue(x)}}</span>
</span>
</template>
<script>

export default {
  props: {
    modelValue: { type: Number, default: 0 },
    editable: {type:Boolean,default:false}
  },
  data() {
    return {};
  },
  methods: {
    setvalue(x) {
      if (this.editable) {
          this.$emit(`update:modelValue`, x);
      }
    },
    getclass() {
        return this.editable?"cursor-pointer":"cursor-default";
    },
    getvalue(i) {
        return (i<=this.modelValue?"★":"☆")
    }

  },
  computed: {
    
  }
};
</script>

