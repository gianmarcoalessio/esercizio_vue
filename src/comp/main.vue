<template>
  <div class="max-w-5xl mx-auto min-h-screen bg-white text-gray-700 p-2 ">
     
    <d-tab :titles="['Servizi', 'login', 'messaggi','altro','scroll']" @change="cambiatab($event)">
      <template v-slot:id0>
        <h1 class="text-xl">gestione servizi: {{ post.baseurl }}</h1>
        <button class="btn" @click="sendwarning()">Manda un Warning</button>
        <button class="btn" @click="senddata()">Manda Dati</button>
        <button class="btn" @click="senddata1()">Manda Dati 1</button>
        <button class="btn" @click="senderr()">Manda Errore</button>
        <router-link class="btn" to="/jacopo/11">jacopo</router-link>
      <d-group
          title="Raggruppa elementi"
          class="border border-base-300 rounded p-3 bg-gray-200"
          >
          <pre>{{ data }}</pre>
          <p>{{ filtro.ggmmaa(curdate) }}</p>
          <d-stars v-model="stelle" class="text-base-400 text-sm" editable />
          nstelle:{{ stelle }}
          <svg-twitter class="w-32 text-red-600 fill-current" />
        </d-group>
      </template>
      <template v-slot:id1>
        <button class="btn" @click="login(true)">login</button>
      </template>
      <template v-slot:id2>
        <button class="btn" @click="wait(true)">wait</button>
        <button class="btn" @click="ismsg = true">Msg1</button>
        </template>
      <template v-slot:id3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, odio quae! Earum eius facere tempora laudantium laborum architecto consequuntur quod, blanditiis reiciendis? Cum ab iure esse reiciendis recusandae explicabo, accusamus soluta voluptatum? Aspernatur eos beatae minus nemo earum nulla ipsum neque, suscipit quas nobis! Ipsam eveniet magnam tempore tenetur debitis totam aspernatur beatae inventore officia quas odit, deleniti modi quibusdam neque unde hic ipsa dolorem saepe temporibus cum autem minima itaque aperiam provident. Exercitationem aliquid facere iste quae fuga excepturi, nemo earum dicta sunt voluptate quibusdam aut esse, quidem laudantium placeat voluptates dignissimos corporis enim? Totam dolore fugiat libero accusamus eveniet blanditiis, deserunt consequatur reiciendis ex. Earum obcaecati laudantium et animi, voluptatibus eius ut ea quae repellendus delectus eaque consectetur maiores cumque accusantium minima possimus aliquid numquam qui magni! Aliquid aut quis numquam quaerat quas veniam sed quos ullam eius eligendi officiis dolorem vel, eos perspiciatis ipsum repudiandae sapiente dicta quibusdam corporis, recusandae voluptatum reiciendis. Excepturi magnam dolore odit, fuga quidem ad at, aliquam mollitia deserunt voluptatum eligendi tempora libero, porro qui rem nesciunt? Velit soluta dolore laudantium error ipsum, blanditiis exercitationem culpa. Laudantium neque aliquid distinctio soluta fugit molestias reprehenderit officiis debitis, molestiae delectus dolorum labore in, itaque saepe quidem quaerat odio voluptatibus, maxime nesciunt sequi quos. Quam officiis labore id esse cumque corrupti, suscipit, neque eveniet illo nisi necessitatibus voluptate iusto ex distinctio perspiciatis excepturi doloribus rerum ea inventore itaque. Illo assumenda vero consectetur blanditiis accusantium pariatur? Assumenda impedit itaque repudiandae odio illum recusandae ad consequatur magnam distinctio veritatis, autem, eaque hic laboriosam quidem cum nihil quasi quas velit animi molestias optio pariatur dolor debitis. Blanditiis est optio debitis nobis repellat? Aperiam maxime beatae in saepe iste adipisci vel enim sunt cupiditate temporibus repudiandae illum unde, quaerat nam molestias quae alias ad earum nemo, deserunt odit. Asperiores sit soluta fuga quos unde tenetur atque ipsam culpa nihil earum delectus hic cumque nulla sint, reprehenderit voluptatibus itaque maxime repellendus? Adipisci aliquam dolorem obcaecati, corrupti omnis vel dignissimos consequatur vitae modi, voluptas iusto harum in accusamus nobis molestiae suscipit placeat quasi sapiente incidunt qui veniam assumenda quisquam eveniet provident? Similique beatae perferendis ab fuga alias et cupiditate nam ullam. Temporibus deserunt fugit nam quaerat maiores, nostrum, expedita voluptates totam impedit beatae, non cupiditate magnam quibusdam nisi commodi veritatis quisquam quam cumque id? Rerum, repellendus numquam vitae officiis praesentium explicabo placeat modi, dolorum tempora quod voluptatum suscipit. Culpa facilis explicabo distinctio qui alias, possimus debitis deleniti dolore totam et molestiae delectus ipsa dicta. Deleniti expedita nam delectus minus dignissimos dolor ad repellendus corrupti rerum tenetur? Deleniti tempora fugit ipsam incidunt minima amet, molestiae consequatur modi ullam assumenda deserunt labore perspiciatis quis placeat voluptate temporibus. Qui explicabo, voluptatum magni unde accusamus eius impedit ratione id deleniti inventore optio rerum maiores repellat consequatur dolor. Quo laudantium, maiores dolore cupiditate quisquam excepturi ipsa! Omnis, ipsam. Quasi tempora ullam incidunt qui numquam perspiciatis non quia ratione magni eum, facere iure, eaque provident repellendus saepe dicta vel doloremque ducimus illum sapiente soluta, consequatur sint? Incidunt, delectus.</p>
      </template>
      <template v-slot:id4>
  
        <jTreet/>
      </template> 
    </d-tab>
    <d-msg v-if="ismsg" @close="ismsg = false" title="titolo" text="prova"
      yesno
    />
  </div>
</template>

<script>
import { bus } from "@eng/bus";
import { post } from "@eng/post";
import jTreet from "@comp/jtreet.vue";
var ii = 0;

// todo:
// router
export default {
  components: {jTreet},
  methods: {
    goscroll() {
      console.log("goscroll");
    },
    gotop() {
      console.log("gotop");
    },
    login() {
      bus.emit("login");
    },
    sendwarning() {
      bus.emit("warning", `messaggio di test ${ii++}`);
    },
    async senddata() {
      this.data = await post.post("servizio/jServizio", { count: ii++ });
    },
    senddata1() {
      post.post("servizio/jServizio", { count: ii++ }).then((d) => {
        this.data = d;
      });
    },
    async senderr() {
      await post.post("servizio/jServizioErr", { count: ii++ });
    },
    wait(mode) {
      bus.emit("wait");
      setTimeout(()=>{
        bus.emit("wait",false);     
      },2000)
      
    },
    cambiatab(e) {
      //console.log(`tab:`,e)
    },
    goscroll()  {

    }
  },
  data() {
    return {
      post,
      data: {},
      curdate: new Date().toInt(),
      stelle: 0,
      ismsg: false,
    };
  },

  computed: {
    mode() {
      return post.baseurl;
    },
  },
};
</script>
