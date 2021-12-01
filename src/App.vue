<template>
  <div id="app">
    <Header @Cerca='filmDaCercare' :error="error"/>
    <FilmList :risultati="risultatoFilmCercato" :tipo='tipo'/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import FilmList from './components/FilmList.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Header,
    FilmList,
  },
  data(){
    return{
      risultatoFilmCercato: null,
      tipo:'',
      apiLink: '',
      error: false,
    }
  },
  methods:{
    filmDaCercare(nome){
      if(nome[0] != '' && nome[1] != ''){
        // settaggio delle variabili props
        this.tipo = nome[1]
        this.error = false;
        // chiamata axios
        axios.get(`https://api.themoviedb.org/3/search/${nome[1]}?`, 
          {params:{
            api_key: '8f561fa6df5ee66570e07ee3b22e98a4',
            query: nome[0],
          }})
          .then((result)=>{
            this.risultatoFilmCercato = result.data.results
          })
      }
      else{
        // in caso di un inserimento non valido
        this.error = true;
      }
    }
  },
}
</script>
<style lang="scss">
#app{
  background-color: #001845;
  color: white;
  min-height: 100vh;
}
</style>
