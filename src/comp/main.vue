<template>
    <h1>test: {{post.baseurl}}</h1>
    <button class="btn" @click="sendwarning()">Manda un Warning</button>
    <button class="btn" @click="senddata()">Manda Dati</button>
    <button class="btn" @click="senddata1()">Manda Dati 1</button>
    <button class="btn" @click="senderr()">Manda Errore</button>
    <button class="btn" @click="wait(true)">wait</button>
    <pre>{{data}}</pre>
    <p>{{$$.ggmmaa(curdate)}}</p>
   
    <svg-close class="w-8 text-orange-600 fill-current" />

</template>

<script>
import {bus} from "@eng/bus";
import {post} from "@eng/post";
var ii=0;

// todo: 
// d-msg
// d-login 
// router
export default {
  methods: {
    sendwarning() {
      bus.emit("warning",`messaggio di test ${ii++}`);
    },
    async senddata() {
      this.data=await post.post("servizio/jServizio",{count:ii++})
    },
    senddata1() {
      post.post("servizio/jServizio",{count:ii++}).then(d=>{
        this.data=d;
      })
    },
    async senderr() {
          await post.post("servizio/jServizioErr",{count:ii++})
    },
    wait(mode) {
      bus.emit("wait");
      setTimeout(()=>{
        bus.emit("nowait")
      },5000);

    }

  },
  data() {
    return {
      post,
      data:{},
      curdate:new Date().toInt()
      
    }
  },

  computed: {
   mode() { return post.baseurl },
  }


}
</script>
