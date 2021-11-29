<template>
  <div id="app">
    <Header @Cerca='cerca'/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      valoreCercato: '',
    }
  },
  methods:{
    cerca(nome){
      this.valoreCercato = nome;
    }
  }
}
</script>

<style lang="scss">
</style>
