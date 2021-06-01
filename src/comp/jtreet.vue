<template>
  <div class="btn w-32" @click="clear()">Clear</div>
  <div class="btn w-32" @click="logga('çiao')">Logga</div>
  <pre>{{post.user}}</pre>
  
  <pre v-for="(x,i) in data" :key="i">{{x}}</pre>
  <!-- <div class="btn w-32" v-if="hasmore" @click="load()">more</div> -->
  
</template>

<script>
export default {
  data() {
    return {
      data: [],
      page: 0,
      hasmore: false,
    };
  },
  created() {
    this.load(0);
    this.$bus.on('more',this.load)
  },
  beforeUnmount() {
    this.$bus.off('more',this.load);
  },
  methods: {
    clear() {
      this.page=0;
      this.load();
    },
    async load() {
      var t = await this.$fetch("servizio/jGetPage", { page:this.page });
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