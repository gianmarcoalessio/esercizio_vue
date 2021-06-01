<template>
  <div class="bg-gray-300 h-screen relative overflow-y-scroll">
    <template v-if="isadministrator">
      <dLoginAdmin class="p-4 bg-gray-100"/>
      <div class="absolute top-0 right-0 mx-3 ">
        <button class="btn2 text-xs" @click="isadministrator = false">
          back
        </button>
      </div>
    </template>
    <template v-else>
      <div class="absolute top-0 right-0 mx-3" v-if="post.user.level == 9">
        <button class="btn2 text-xs" @click="gotoadmin()">admin tools</button>
      </div>
    <div class="sm:px-8 sm:pt-8">
      <img src="/img/logo.svg" alt class="hidden w-64 sm:block" />
    </div>

    <div class="max-w-xl mx-auto bg-gray-700 shadow-xl text-white p-4 relative md:rounded">
      <button @click="close()" class="absolute right-0 top-0 mr-5 mt-2 text-2xl w-4 fill-current">
        <svg-close />
      </button>

    <img class="w-24" src="/img/logo.svg" alt />
       
    <!-- login utente esistente -->
    <template v-if="register==0">
        <h1 class="block text-center text-3xl font-bold">Login:
            <span v-if="post.user">{{ post.user.name }}</span>
        </h1>

        <label class="label-fill">Name / Email:</label>
        <input ref="name" class="input-fill" type="text" v-model="name" placeholder="insert email or name" name="name" />
        <label class="label-fill mt-3">Password:</label>
        <input class="input-fill mb-4" type="password" v-model="pass" placeholder="password" name="password" />
        <div class="flex flex-wrap justify-between">
            <div>
                <button class="btni0" @click="login()">Login</button>
                <button v-if="post.user && post.user.name && post.user.name!='guest' " class="ml-4 btni1" @click="register = 2">
                UserInfo
                </button>
                <button v-else-if="post.init.register" class="ml-4 btni1" @click="register = 1">
                Register
                </button>
            </div>
            <div>
                <button class="mr-4 btni2" @click="logout()">Logout</button>
            </div>
        </div>
        <p class="text-center text-sm">
            se hai dimenticato la password inserisci solo la tua email e
            <button class="btni2" @click="misspassword()">premi qui</button>
            per ricevere nella tua email una password temporanea
        </p>
        <p v-if="msg" class="mt-2 text-xl font-bold text-center text-alt-500">
            {{ msg }}
        </p>

    </template>
    <!-- registrazione utente -->
    <template v-else-if="register==1">
         <h1 class="block text-center text-3xl font-bold">
              Registrazione nuovo utente:
            </h1>
            <label class="label-fill">Name:</label>
            <input class="input-fill" type="text" v-model="reg.name" placeholder="name" />
            <label class="label-fill">email:</label>
            <input class="input-fill" type="text" v-model="reg.email" placeholder="please insert a valid email address" />
            <label class="label-fill">info:</label>
            <textarea class="input-fill" v-model="reg.info"></textarea>
            <label class="label-fill mt-3">Password:</label>
            <input class="input-fill mb-1" type="password" v-model="reg.newpass" placeholder="insert a password min 8 char" name="password" />
            <input class="input-fill mb-4" type="password" v-model="reg.newpass2" placeholder="repeat password to confirm" name="password" />
            <button class="btni0" @click="registra()">Register</button>
            <button class="ml-4 btni2" @click="register = 0">Login</button>
            <br />

            <p v-if="reg.msg" class="mt-2 text-xl font-bold text-center text-alt-500">
              {{ reg.msg }}
            </p>

    </template>
    <!-- modifica dati utente -->
    <template v-else>
        <h1 class="block text-center text-3xl font-bold">
              informazioni: {{ post.user.name }}
            </h1>

            <h3 class="block text-xl font-bold">Cambio Password:</h3>
            <label class="label-fill mt-3">old password:</label>
            <input class="input-fill mb-1" type="password" v-model="reg.oldpass" placeholder="insert current" name="password" />
            <label class="label-fill mt-3">new password:</label>
            <input class="input-fill mb-1" type="password" v-model="reg.newpass" placeholder="insert a password min 8 char" name="password" />
            <input class="input-fill mb-4" type="password" v-model="reg.newpass2" placeholder="repeat password to confirm" name="password" />
            <button class="btni0 inline" @click="changepass()">
              Change Password
            </button>
            <h3 class="block text-xl font-bold">Informazioni:</h3>
            <label class="label-fill">email:</label>
            <input class="input-fill" type="text" v-model="post.user.email" placeholder="please insert a valid email address" />
            <label class="label-fill">info:</label>
            <textarea class="input-fill" type="text" v-model="post.user.description" placeholder="please insert a valid email address" />
            <div class="mt-2">
              <button class="btni0 inline" @click="savedata()">
                Save Data
              </button>
              <button v-if="post.init.register" class="ml-4 btni2" @click="askdel = true">
                Delete User
              </button>
              <button class="ml-4 btni2" @click="register = 0">Login</button>
            </div>
            <p v-if="reg.msg" class="mt-2 text-xl font-bold text-center text-alt-500">
              {{ reg.msg }}
            </p>

    </template>
    </div>
    <d-msg v-if="askdel" title="delete user" text="confirm delete current user" yesno @close="dodelete($event)"></d-msg>
    </template>
    </div>
</template>

<script>
import { post } from "@eng/post.js";
import { bus } from "@eng/bus.js";
import dLoginAdmin from "@eng/loginadmin.vue";
export default {
  components: { dLoginAdmin},
  emits: ["close"],
  data() {
    return {
      isadministrator: false,
      islogs: false,
      register: 0,
      name: "",
      pass: "",
      msg: "",
      post: post,
      reg: {
        name: "",
        email: "",
        info: "",
        oldpass: "",
        newpass: "",
        newpass2: "",
        confirm: "",
        msg: "",
      },
      askdel: false,

    };
  },
    mounted() {

},

  methods: {
    gotoadmin() {
       this.isadministrator=true;
    },
    clearlogs() {
      this.$set(post, "warnings", [])
    },
    creawarn() {
      post.post("auth/jTestError")
    },
    prevent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    close() {
      this.$emit("close");
    },
    showmsg(e, ms = 3000) {
      this.msg = e;
      setTimeout(() => {
        this.msg = "";
      }, ms);
    },
    showregmsg(e, ms = 3000) {
      this.reg.msg = e;
      setTimeout(() => {
        this.reg.msg = "";
      }, ms);
    },
    login() {
        if (!this.name || !this.pass) {
           this.showmsg("devi inserire nome e password!");
        } else {
        post.login(this.name,this.pass)
          .then((d) => {
            this.$emit("close");
            bus.$emit("userloaded");
          })
          .catch(e => {
            this.showmsg(e);
          });
      }
      this.$refs.name.focus();
    },
    misspassword() {
      post
        .post("auth/misspass", { email: this.name })
        .then((d) => {
          this.msg = "mail with temporary password sent to: " + this.name;
        })
        .catch((e) => {
          this.msg = e.message;
        });
    },
    

    logout() {
      post.logout();
      this.name="";
      this.password="";
    
    },
    registra() {
      if (!this.reg.name || !this.reg.email || !this.reg.newpass) {
        this.showregmsg("devi inserire nome, email e password");
      } else if (this.reg.newpass != this.reg.newpass2) {
        this.showregmsg("le password inserite non coincidono");
      } else {
        post
          .post("auth/register", {
            name: this.reg.name,
            email: this.reg.email,
            description: this.reg.info,
            pass: this.reg.newpass,
          })
          .then((d) => {
            this.reg.msg = "please check your email to confirm registration";
          })
          .catch((e) => {
            this.reg.msg = e.message;
          });
      }
    },
    dodelete(e) {
      this.askdel = false;
      if (e == "yes") {
        post
          .post("auth/removeuser", {})
          .then((d) => {
            this.register = 0;
            this.logout();
          })
          .catch((e) => {
            this.showregmsg(e.message);
          });
      }
    },
    changepass() {
      if (!this.reg.newpass || !this.reg.oldpass) {
        this.showregmsg("devi inserire vecchia e nuova password");
      } else if (this.reg.newpass != this.reg.newpass2) {
        this.showregmsg("le due password non coincidono!");
      } else {
        post
          .post("auth/changepass", {
            newpass: this.reg.newpass,
            oldpass: this.reg.oldpass,
          })
          .then((d) => {
            this.showregmsg("Password Cambiata!");
          })
          .catch((e) => {
            this.showregmsg(e.message);
          });
      }
    },
    savedata() {
      post
        .post("auth/savedata", {
          email: this.post.user.email,
          description: this.post.user.description,
        })
        .then((d) => {
          this.showregmsg("Dati Salvati!");
        })
        .catch((e) => {
          this.showregmsg(e.message);
        });
    },
  },
};
</script>
