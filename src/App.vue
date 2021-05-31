<template>
    <d-warning/>
    <dWait/>
    <div class="w-full bg-gray-200">
      <template v-if="mustlogin()">
        <d-login @close="ask=false"/>
      </template>
      <div v-show="!mustlogin()" >
        <d-scrollmanager>
            <jMain />
        </d-scrollmanager>
      </div>
    </div>
    
</template>

<script>
import jMain from "@comp/main.vue";
import dWait from "@eng/wait.vue"
import dLogin from "@eng/login.vue";
import dScrollmanager from "@eng/dscrollmanager.vue";
import {bus} from "@eng/bus";
import {post} from "@eng/post";

var ii=0;

// todo: 
// d-msg
// d-login 
// router

export default {
  components: {
    jMain,dWait,dLogin,dScrollmanager
  },
  data() {
    return {
      post: post,
      ask: false,
      loaded: false,
      wait: false,
    };
  },
  methods: {
    mustlogin() {
      if (!post.init.login && post.init.isguest) return false; // non è previsto il login
      if (!post.user || !post.creds || !post.creds.token) return true;
      return this.ask;
    },
  },
  created() {
    bus.on("login", e => {
      this.ask = true;
      this.mustlogin();
    });
   
    post.token().then(d=>{
      console.log("xxx");
      this.loaded=true;
    }).catch(e=>{
      console.log("err");
      post.postbase("auth0/getconfig").then(d=>{
          post.config = d.config;
          post.langs = d.langs;
          post.init = d.init;
          console.log(post.init);
          if (!post.init.isguest) {
            this.ask=true;
            this.mustlogin();
          }
          this.loaded=true;
      }).catch(e=>{
        this.ask=true;
        this.mustlogin()
        this.loaded=true;
      })

    })
  },
  beforeUnmount() {
    bus.$off("login");
  }
};
</script>

