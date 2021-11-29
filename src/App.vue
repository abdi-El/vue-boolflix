<template>
  <div id="app">
    <Header @Cerca='filmDaCercare'/>
    <FilmList :risultati="risultatoFilmCercato"/>
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
    }
  },
  methods:{
    filmDaCercare(nome){
      if(nome != ''){
        axios.get('https://api.themoviedb.org/3/search/movie?', {params:{
          api_key: '8f561fa6df5ee66570e07ee3b22e98a4',
          query: nome,
        }})
          .then((result)=>{
            this.risultatoFilmCercato = result.data.results
          })
      }
      else{
        this.risultatoFilmCercato = [];
      }
    }
  },
}
</script>
<style lang="scss">
</style>
