<template>
    <h1>Sono Jacopo: {{data.id}}</h1>
    <pre>{{data}}</pre>
    <button class="btn" @click="gotomain()"> Main</button>
    <button class="btn" @click="gotoaltro()"> altro</button>    
    <router-link class="btn" :to="`/jacopo/${Math.floor(Math.random()*1000)}`">jacopo</router-link>
    
</template>

<script>
export default {
    data() {
        return {
            data:{}
        }
    },
    beforeRouteUpdate(to,from) {
      this.load(to.params.id)
    },
    mounted() {
       this.load(this.$route.params.id)
    },
  

    methods: {
        async load(id) {
            this.data=await this.$fetch('servizio/jGetCliente',{id})
        },
       
        gotomain() {
            this.$router.push('/',{id:33} );
        },
        gotoaltro() {
            this.$router.push('/altro/2222' );
      
        }

    }
}
</script>

<style>

</style>