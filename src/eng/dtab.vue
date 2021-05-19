<template>
  <div class="w-full">
    <div class="flex justify-between border-b-4 pr-2 border-gray-400 mb-2">
      <div style="margin-bottom: -4px">
        <button
          v-for="(x, k) in titles"
          :key="k"
          :class="getclass(k)"
          class="pt-3 px-3 border-b-4 relative uppercase font-bold hover:border-base-300"
          @click="change(k)"
        >
          <span>{{ x }}</span>
        </button>
        <slot name="add" />
      </div>
      <div>
        <slot name="btn" />
      </div>
    </div>
    <div class="w-full" v-for="(x, k) in titles" :key="k">
      <slot :name="'id' + k" v-if="k == xid">
        <p>slot 'id{{ k }}'</p>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    id: { type: Number, default: 0 },
    titles: { type: Array, default: ["title"] },
  },
  data() {
    return {
      xid: this.id,
    };
  },
  methods: {
    getclass(i) {
      return this.xid == i
        ? "border-base-600 text-base-700 bg-white"
        : "border-gray-400 text-gray-600";
    },
    change(k) {
        this.xid = k;
        this.$emit("change", k);
      
    },
  },
  computed: {},
};
</script>
