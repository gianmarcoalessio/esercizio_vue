<template>
  <div>
    <div>
      <button class=" border-b border-base-400 uppercase pt-1 my-2 font-bold text-base-600" @click="invert()">
        <span>{{title}}</span>
        <span class="text-sm pl-2 text-orange-600">{{sym}}</span>
      </button>
    </div>
    <div v-show="open">
      <slot />
    </div>
  </div>
</template>
<script>
import { bus } from "@eng/bus.js";

export default {
  components: {},
  props: {
    closed: { type: Boolean, default: false },
    title: { type: String, default: "title" }
  },
  data() {
    return {
      xopen: true
    };
  },
  methods: {
    invert() {
      this.xopen = !this.xopen;
      this.$emit('click',this.xopen);
    }
  },
  computed: {
    sym() {
        return this.open?'▼':'▶'
    },
    open() {
      return this.closed ? !this.xopen : this.xopen;
    }
  }
};
</script>
