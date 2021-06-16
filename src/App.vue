<template>
  <d-warning />
  <dWait />
  <div class="w-full bg-gray-200">
    <template v-if="mustlogin()">
      <d-login @close="ask = false" />
    </template>

    <div v-show="!mustlogin()">
      <d-scrollmanager>
        <router-view />
      </d-scrollmanager>
    </div>
  </div>
</template>

<script>
import dWait from "@eng/wait.vue";
import dLogin from "@eng/login.vue";

import { bus } from "@eng/bus";
import { post } from "@eng/post";

var ii = 0;

export default {
  components: {
    dWait,
    dLogin,
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
    login() {
      this.ask = true;
      this.mustlogin();
    },
  },
  created() {
    bus.on("login", this.login);

    post
      .token()
      .then((d) => {
        this.loaded = true;
      })
      .catch((e) => {
        console.log("err");
        post
          .postbase("auth0/getconfig")
          .then((d) => {
            post.config = d.config;
            post.langs = d.langs;
            post.init = d.init;
            console.log(post.init);
            if (!post.init.isguest) {
              this.ask = true;
              this.mustlogin();
            }
            this.loaded = true;
          })
          .catch((e) => {
            this.ask = true;
            this.mustlogin();
            this.loaded = true;
          });
      });
  },
  beforeUnmount() {
    bus.off("login", this.login);
  },
};
</script>

