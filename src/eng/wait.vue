<template>

<div class="fixed inset-0 flex items-center justify-center z-40 cursor-wait" v-if="wait" @click="click()">
      <div class="fixed inset-0  bg-gray-500 opacity-25"></div>
      <div class="h-80 w-80 fill-current text-blue-700">
<svg viewBox="0 0 100 100"><g transform="translate(80,50)">
<g transform="rotate(0)">
<circle cx="0" cy="0" r="4" fill-opacity="1" transform="scale(1.04495 1.04495)">
  <animateTransform attributeName="transform" type="scale" begin="-1.4545454545454546s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-1.4545454545454546s"></animate>
</circle>
</g>
</g><g transform="translate(75.23760598493544,66.21922452366792)">
<g transform="rotate(32.72727272727273)">
<circle cx="0" cy="0" r="4" fill-opacity="0.9090909090909091" transform="scale(1.08132 1.08132)">
  <animateTransform attributeName="transform" type="scale" begin="-1.309090909090909s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-1.309090909090909s"></animate>
</circle>
</g>
</g><g transform="translate(62.462450390056595,77.28895986063554)">
<g transform="rotate(65.45454545454545)">
<circle cx="0" cy="0" r="4" fill-opacity="0.8181818181818182" transform="scale(1.11768 1.11768)">
  <animateTransform attributeName="transform" type="scale" begin="-1.1636363636363638s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-1.1636363636363638s"></animate>
</circle>
</g>
</g><g transform="translate(45.73055485180145,79.69464325642798)">
<g transform="rotate(98.18181818181817)">
<circle cx="0" cy="0" r="4" fill-opacity="0.7272727272727273" transform="scale(1.15404 1.15404)">
  <animateTransform attributeName="transform" type="scale" begin="-1.0181818181818183s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-1.0181818181818183s"></animate>
</circle>
</g>
</g><g transform="translate(30.35417798164145,72.67248723062775)">
<g transform="rotate(130.9090909090909)">
<circle cx="0" cy="0" r="4" fill-opacity="0.6363636363636364" transform="scale(1.19041 1.19041)">
  <animateTransform attributeName="transform" type="scale" begin="-0.8727272727272729s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-0.8727272727272729s"></animate>
</circle>
</g>
</g><g transform="translate(21.215210791565077,58.45197670524289)">
<g transform="rotate(163.63636363636365)">
<circle cx="0" cy="0" r="4" fill-opacity="0.5454545454545454" transform="scale(1.22677 1.22677)">
  <animateTransform attributeName="transform" type="scale" begin="-0.7272727272727273s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-0.7272727272727273s"></animate>
</circle>
</g>
</g><g transform="translate(21.215210791565077,41.548023294757115)">
<g transform="rotate(196.36363636363635)">
<circle cx="0" cy="0" r="4" fill-opacity="0.45454545454545453" transform="scale(1.26313 1.26313)">
  <animateTransform attributeName="transform" type="scale" begin="-0.5818181818181819s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-0.5818181818181819s"></animate>
</circle>
</g>
</g><g transform="translate(30.354177981641442,27.327512769372255)">
<g transform="rotate(229.0909090909091)">
<circle cx="0" cy="0" r="4" fill-opacity="0.36363636363636365" transform="scale(1.2995 1.2995)">
  <animateTransform attributeName="transform" type="scale" begin="-0.43636363636363645s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-0.43636363636363645s"></animate>
</circle>
</g>
</g><g transform="translate(45.73055485180144,20.30535674357202)">
<g transform="rotate(261.8181818181818)">
<circle cx="0" cy="0" r="4" fill-opacity="0.2727272727272727" transform="scale(1.33586 1.33586)">
  <animateTransform attributeName="transform" type="scale" begin="-0.29090909090909095s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-0.29090909090909095s"></animate>
</circle>
</g>
</g><g transform="translate(62.46245039005658,22.711040139364442)">
<g transform="rotate(294.54545454545456)">
<circle cx="0" cy="0" r="4" fill-opacity="0.18181818181818182" transform="scale(1.37223 1.37223)">
  <animateTransform attributeName="transform" type="scale" begin="-0.14545454545454548s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="-0.14545454545454548s"></animate>
</circle>
</g>
</g><g transform="translate(75.23760598493544,33.78077547633208)">
<g transform="rotate(327.2727272727273)">
<circle cx="0" cy="0" r="4" fill-opacity="0.09090909090909091" transform="scale(1.00859 1.00859)">
  <animateTransform attributeName="transform" type="scale" begin="0s" values="1.4 1.4;1 1" keyTimes="0;1" dur="1.6s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1.6s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
</circle>
</g>
</g></svg>
      
      </div>
  </div>
  
</template>
<script>
import {bus} from "@eng/bus.js";
export default {
  data() {
      return {
          wait:false
      }
  },
  created() {
    bus.on("wait",(e=true)=>{ this.wait=e}) ;
    bus.on("nowait",()=> this.wait=false)
  },
  beforeUnmount() {
    bus.off("wait");
    bus.off("nowait");
  },
  methods: {
    click() {
       this.wait=false;
    }
  }

}
</script>



