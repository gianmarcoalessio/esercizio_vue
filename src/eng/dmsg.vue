<template>
  <transition name="fade">
    <div @keypress.esc.prevent="close()">
     <div class="fixed inset-0 z-20 bg-black opacity-50"  @click="close()"></div>
      <div class="fixed inset-0 z-30 flex items-center justify-center" @click="close()">
      <div :class="getclass" class="bg-gray-100 w-full sm:rounded shadow-lg text-gray-700 relative max-h-full overflow-y-auto  border border-gray-500" @click="noclose($event)" >
          <button v-if="isclose" @click="close()" class="absolute right-0 top-0 mr-5 mt-2 w-4 fill-current z-10 text-red-800 hover:text-red-500">
              <svg-close /> 
          </button>
          <slot>
            <div class="bg-base-600 text-white p-4">
              <div class="text-2xl">{{title}}</div>
            </div>
            <div class="py-6 px-4" v-html="text"></div>
            <div class="p-4">
              <div v-if="yesno">
                <button class="btn " @click="close('yes')">Yes</button>
                <button class="btn2 btn-white ml-3 py-1" @click="close('no')">No</button>
              </div>
              <div v-else>
                <button class="btn py-1" @click="close('yes')">Ok</button>
              </div>
            </div>
          </slot>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "titolo" },
    text: { type: String, default: "messaggio" },
    type: { type: String, default: "" },
    full:Boolean,
    '2xl':Boolean,
    '3xl':Boolean,
    '4xl':Boolean,
    '5xl':Boolean,
    yesno: Boolean
  },
  methods: {
    noclose(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    close(val) {
      this.$emit("close", val);
    }
  },
  computed: {
     getclass() {
       if (this.full) return "h-full" 
       if (this['2xl']) return "max-w-2xl";
       if (this['3xl']) return "max-w-3xl";
       if (this['4xl']) return "max-w-4xl";
       if (this['5xl']) return "max-w-5xl";
       return "max-w-xl";
       
    },
    isclose() {
       return this.$attrs.onClose ? true:false;
       // return this.$listeners.close 
    }
  }
};
</script>

