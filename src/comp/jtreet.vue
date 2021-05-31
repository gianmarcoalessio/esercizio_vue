<template>
  <div class="btn w-32" @click="clear()">Clear</div>
  <pre v-for="(x,i) in data" :key="i">{{x}}</pre>
  <!-- <div class="btn w-32" v-if="hasmore" @click="more()">more</div> -->
 
</template>

<script>
import { bus } from "@eng/bus";
import { post } from "@eng/post";
export default {
  data() {
    return {
      data: [],
      page: 0,
      hasmore: false,
    };
  },
  created() {
    bus.on("more", this.load);
    this.load(0);
  },
  beforeUnmount() {
    bus.off("more",this.load);
  },
  methods: {
    clear() {
      this.page=0;
      this.load();
    },
    async load() {
      var t = await post.post("servizio/jGetPage", { page:this.page });
      if (this.page == 0) {
        this.data = t.data;
      } else {
        for (var tm of t.data) { this.data.push(tm) };
      }
      this.hasmore = t.hasmore;
      this.page++;
    },
  }
};
</script>