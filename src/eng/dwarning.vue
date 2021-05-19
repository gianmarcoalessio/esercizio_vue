<template>
  <transition name="fade">
    <button @click="close()" v-if="mostra" class="fixed inset-x-0 bottom-0 w-full lg:max-w-3xl text-left mx-auto mb-2 bg-orange-200 border-t-4 border-orange-600 z-50 p-2 " >
      <div class="absolute top-0 right-0 mr-2 mt-1">
        <svg-close class="w-4 text-orange-800 hover:text-orange-500 fill-current" /> 
      </div>
      <div class="text-base-600 text-xl px-8 pt-2 block overflow-hidden whitespace-pre">{{txt2}}</div>
      <div class="text-orange-600 text-sm font-bold px-8 block overflow-hidden">{{txt}}</div>
      <pre v-if="extra" class="text-xs px-10 pb-2  text-base-800 font-mono">{{extra}}</pre>
    </button>
  </transition>
</template>

<script>
import  {bus}  from "@eng/bus.js";
import {post} from "@eng/post.js"
export default {
  created() {
    bus.$on("warning", this.setwarning);
  },
  beforeUnmount() {
    bus.$off("warning", this.setwarning);
  },
  data() {
    return {
      mostra: false,
      txt: "",
      txt2: "",
      extra:"",
      t1:0
    };
  },
  methods: {
    setwarning(msg) {
      this.txt=this.txt2=this.extra="";
      var t={
        txt:'',
        title:'',
        date:new Date()
      }
      var tt='';
      if (Array.isArray(msg)) {
          tt=msg.join(`\n`);
          
      } else {
        if (typeof(msg)=='string') {
            tt = msg;
            t.title=""
        } else {
            tt=msg.message || msg.msg || msg.txt || msg.text;
            t.title=this.txt2=msg.burl || msg.url || msg.title || '';
        }
      }
      
      var vv=tt.split('\n');
      t.txt=this.txt=vv[0];
      vv.splice(0,1);
      vv=vv.filter(e=> (e || '').trim().length>0);
      t.extra=this.extra=vv.join(`\n`);
      post.warnings.unshift(t);
      if (this.mostra) clearTimeout(this.t1) 
      this.mostra = true;
      
      
      this.t1=setTimeout(() => {
        this.mostra = false;
      }, 10000);
        },
    close() {
      if (this.mostra) clearTimeout(this.t1) 
      this.mostra=false;
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
