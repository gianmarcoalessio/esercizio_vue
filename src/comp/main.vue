<template>
  <div class="max-w-5xl mx-auto bg-white text-gray-700 min-h-screen p-2">
    <d-tab :titles="['Servizi', 'messaggi', 'Login']" @change="cambiatab($event)">
      <template v-slot:id0>
        <h1 class="text-xl">gestione servizi: {{ post.baseurl }}</h1>
        <button class="btn" @click="sendwarning()">Manda un Warning</button>
        <button class="btn" @click="senddata()">Manda Dati</button>
        <button class="btn" @click="senddata1()">Manda Dati 1</button>
        <button class="btn" @click="senderr()">Manda Errore</button>
      <d-group
          title="Raggruppa elementi"
          class="border border-base-300 rounded p-3 bg-gray-200"
        >
          <pre>{{ data }}</pre>
          <p>{{ $$.ggmmaa(curdate) }}</p>
          <d-stars v-model="stelle" class="text-base-400 text-sm" editable />
          nstelle:{{ stelle }}
          <svg-close class="w-8 text-orange-600 fill-current" />
        </d-group>
      </template>
      <template v-slot:id1>
        <button class="btn" @click="wait(true)">wait</button>
        <button class="btn" @click="login(true)">login</button>
        <button class="btn" @click="ismsg = true">Msg1</button>
      </template>
        <template v-slot:id2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, fugiat nobis error officiis quidem nam totam impedit blanditiis architecto illo animi reiciendis amet dolores quasi nulla aspernatur harum eius magni.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae error aspernatur quaerat unde iusto ex at deserunt. Vero facilis reprehenderit nihil, earum, tempora impedit fugiat iste excepturi consectetur, qui dolore eos ipsa natus libero? Tempore adipisci voluptas quaerat qui cupiditate fugit atque recusandae nulla sequi repellendus, pariatur, exercitationem veniam ab provident quia omnis quasi enim aliquam voluptatibus. Maxime dolore sint animi eius adipisci quis deleniti eum consectetur quibusdam delectus blanditiis perspiciatis itaque sapiente facere alias explicabo fugit inventore minus iste, non id? Iure sint tempore nisi minima beatae, omnis qui ipsum similique quia architecto quos culpa illum atque deleniti sunt, in unde corrupti rerum illo. Minus delectus dolorum quidem accusantium ducimus enim, voluptas facere? Laboriosam eos quidem molestiae, vitae obcaecati minus itaque earum, aliquid placeat praesentium, perferendis distinctio rem! Debitis, reprehenderit nisi! Dolore molestiae id alias, non soluta minus sed magni inventore ab. Sequi facere similique eos neque rerum earum, magnam, nesciunt quae mollitia reprehenderit quaerat? Quos blanditiis alias architecto cupiditate ea quis! Animi ea quas sapiente vero provident tempore adipisci temporibus culpa deserunt, molestiae fuga earum. Fugiat, rerum sit? Adipisci, facere rem. A optio ex eligendi quaerat animi. Quaerat necessitatibus soluta, illo animi consequatur praesentium adipisci non ullam cum dignissimos blanditiis impedit nam tempore omnis fugiat eaque reprehenderit. Sunt quia quam animi atque, voluptatum nesciunt labore quod. Hic aliquam optio autem quam! Iusto tempora dignissimos similique voluptatibus minus! Neque quis voluptatibus ex consequuntur iusto odit culpa hic, tenetur ad. Ea sed amet at, soluta perspiciatis quod, sit distinctio nostrum dolor eius necessitatibus suscipit repellendus aperiam hic ipsam odit dolorum, minima esse iste inventore aliquam a ipsa. Facilis alias iure ab animi cupiditate voluptatum eum placeat distinctio, sequi dolor illum provident consectetur, autem nobis dolorem et doloribus temporibus amet qui, quasi natus quam. Velit illo explicabo, vitae rem sed voluptatum quos odio molestias. Debitis obcaecati consectetur pariatur corrupti aliquid explicabo dolore, unde at, saepe voluptatem officia adipisci ipsum iusto officiis provident eum porro reprehenderit harum eius fugit tenetur vero eaque doloribus minima. Veritatis dicta perspiciatis tempora laboriosam, perferendis blanditiis. Animi dignissimos possimus quod, nobis autem odio aspernatur doloribus. Accusantium, odit eius placeat quod eveniet ullam tempora iste, dignissimos obcaecati perspiciatis itaque. Et eveniet est ad sit enim distinctio repudiandae cupiditate nihil quo amet architecto placeat temporibus obcaecati ipsa laudantium velit, vero mollitia, nisi fugit voluptas excepturi explicabo harum repellendus. Eum accusantium non nostrum ipsa enim, tempore neque odit commodi ea laborum voluptatem at, perferendis alias architecto, dicta inventore dolore quos culpa possimus. Vel incidunt hic consectetur amet, neque qui. Eos, sequi nulla voluptates repellat magni totam non modi quibusdam dolore harum, labore reiciendis repudiandae consectetur hic eligendi provident cum sint laboriosam. Ex maiores sed non iusto cum voluptatem, repudiandae atque ipsam autem quisquam nihil molestiae suscipit! Sit maiores officia sequi! Sint quia consequuntur iste quaerat et accusamus est explicabo dolorum ipsum esse corporis aliquid ad ullam officiis inventore mollitia, sed, sapiente ab numquam reprehenderit iure, nam provident quidem. Omnis ut molestias praesentium, mollitia facilis sit aliquam eius perspiciatis enim!</p>
        </template>
    </d-tab>

    <d-msg
      v-if="ismsg"
      @close="ismsg = false"
      title="titolo"
      text="prova"
      yesno
    />
  </div>
</template>

<script>
import { bus } from "@eng/bus";
import { post } from "@eng/post";
var ii = 0;

// todo:
// d-msg
// d-login
// router
export default {
  methods: {
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
      setTimeout(() => {
        bus.emit("nowait");
      }, 5000);
    },
    cambiatab(e) {
      console.log(`tab:`,e)
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
