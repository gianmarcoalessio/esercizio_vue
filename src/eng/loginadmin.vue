<template>
    <div class="max-w-6xl p-4 mx-auto min-h-screen bg-gray-200 shadow-xl">
      <div class="text-3xl text-base-500 mb-2">
          Users management:
      </div>
      
      <div class="flex">
        <div class="flex-1">

      <input
          id="cerca"
          autocomplete="off"
          type="text"
          placeholder="...filtra..."
          class="block mb-3 text-xl px-10 rounded-lg shadow border border-gray-400 w-full text-gray-600 shadow-md"
          v-model="cerca"
        />
             </div>
        <button class="btn -mt-1 mb-5 text-sm" @click="askcrea()">add user</button>  
        <button class="btn -mt-1 mb-5 text-sm" @click="load()">reload</button>  
        </div>
        <div>
          <table class="table">
             <tr>
               <th style="width:4%">id</th>
               <th >name</th>
               <th>email</th>
               <th></th>
               <th>mods</th>
               <th style="width:4%">annulla</th>
               <th style="width:4%">level</th>
               <th style="width:4%">..</th>
             </tr>
             <tr v-for="(x,i) in fusers" :key="i">
                <td>{{x.rowid}}</td>
                <td class="input">
                    <input type="text" class="px-2 border  border-base-300 rounded-sm" v-model="x.name"> 
                </td>
                <td class="w-4/12 input"> 
                    <input type="text" class="px-2 w-full border  border-base-300 rounded-sm" v-model="x.email"> 
                </td>
                <td>
                  <button class="btn text-sm px-2 py-1 mx-1" 
                      v-if="x.rowid!=1"
                      @click="uu=x;uu.password=generatePassword(12);isnewpassword=true">pass
                  </button>

                </td>
                <td class="input ">
                    <input type="text" class="px-2 w-full border  border-base-300 rounded-sm" v-model="x.mod"> 
                </td>
               
                <td><d-check v-model="x.annulla" v-if="x.rowid!=1"></d-check></td>
                <td class="input">
                    <input  v-if="x.rowid!=1" type="number" class="w-20 px-2  border  border-base-300 rounded-sm"  v-model="x.level"> 
                </td>
                <td class="text-center">
                  <button class="btn text-sm px-2 py-1" @click="save(x)">Save
                  </button>
                </td>

             </tr>
          </table>


        </div>
        <d-msg v-if="iscreate" @close="iscreate=false">
            <div class="p-5 bg-gray-300">
                <label class="label-fill">Nome</label><input class="input-fill" type="text" v-model="c.name" />
                <label class="label-fill">Email</label><input class="input-fill" type="text" v-model="c.email" />
                <div class="flex flex-wrap">
                    <div class="flex-1">
                       <label class="label-fill">Password</label><input class="input-fill" type="text" v-model="c.password" />
                    </div>
                    <button class="btn ml-4 mt-7" @click="c.password=generatePassword(12)">Genera</button>
                </div>
                <label class="label-fill">Descrizione</label><textarea class="input-fill"  v-model="c.des" />
                <button class="btn mt-3" @click="create()">Crea</button>
            </div>
        </d-msg>
        <d-msg v-if="isnewpassword" @close="savepassword(valse)">
            <div class="p-4 bg-base-600 text-white text-xl">Imposta Nuova Password: {{uu.name}}</div>
            <div class="p-4 bg-gray-300 ">
                <textarea class="input-fill font-mono" type="text" rows="3" :value="`User.....: ${uu.name} \nPassword.: ${uu.password}`"/>
                <p><b>ATTENZIONE: </b>E' stata generata una nuova password per l'utente <b>{{uu.name}}</b>. 
                Prima di confermare, è  necessario copiare le nuove informazioni di accesso perchè non saranno più disponibili successivamente. </p>
                <button class="btn mt-3" @click="savepassword('yes')">Reimposta Password</button>
            </div>
         
        </d-msg>
    </div>
</template>
<script>
import { post} from "@eng/post";

export default {
  data() {
    return {
        post,
        users:[],
        cerca:'',
        iscreate:false,
        isnewpassword:false,
        c:{
            name:'',
            email:'',
            des:'',
            password:''
        },
        uu: {
        }
    };
  },
  created() {
      this.load();
  },
  methods: {
    savepassword(e) {
      this.isnewpassword=false;
      if (e=='yes') {
          if (this.uu.password) {
            post.post("auth/jAdmUpdatePass",{ user:this.uu}).then(d=>{
                alert ('password resettata per '+this.uu.name);
            })
          }
      }
    },
    load() {
        post.post("auth/jAdmUsers",{}).then(d=>{
          this.users=d;
        })
    },

    generatePassword(length) {
      const charset = "AabcDfeGghijkLMnoptqrSdTuvwXYZ01234789!!..=+--";
      var retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    },
    save(x) {
        post.post("auth/jAdmUpdateUser",{ user:x}).then(d=>{
           for (var i=0;i<this.users.length;i++) {
              if (this.users[i].rowid==d.rowid) {
                this.users[i]=d;
                break;
              }
           }
        })
    },
    askcrea() {
        this.c.name="name";
        this.c.email=""
        this.c.password="password"
        this.c.des=""
        this.iscreate=true;
    },
    create() {
        post.post("auth/jAdmCreateUser",this.c).then(d=>{
          this.users=d;
          this.iscreate=false;
        })
    }
   
  },
  computed: {
    fusers(){
        if (!this.cerca) return this.users;
        var x=new RegExp(this.cerca,"i");
        
        var rr=this.users.filter(u=>{
            return (x.test(u.name ||'') || x.test(u.email || '') || x.test(u.description || ''))
        })
        return rr;


    }
  }
};
</script>

