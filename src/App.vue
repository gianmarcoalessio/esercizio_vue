<template>
    <d-warning/>
    <dWait/>
    <jMain/>
</template>

<script>
import jMain from "@comp/main.vue";
import dWait from "@eng/wait.vue"
import {bus} from "@eng/bus";
import {post} from "@eng/post";
var ii=0;

// todo: 
// d-msg
// d-login 
// router
export default {
  components: {
    jMain,dWait
  },
 
}
</script>
