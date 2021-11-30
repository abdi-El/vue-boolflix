<template>
  <div id="app">
    <Header @Cerca='filmDaCercare'/>
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
    }
  },
  methods:{
    filmDaCercare(nome){
      if(nome[0] != '' && nome[1] != ''){
        this.apiLink = nome[1] == 'movies'  ? 'https://api.themoviedb.org/3/search/movie?' : 'https://api.themoviedb.org/3/search/tv?'
        this.tipo = nome[1] == 'movies'  ? 'movies' : 'tv-series'
        axios.get(this.apiLink, 
          {params:{
            api_key: '8f561fa6df5ee66570e07ee3b22e98a4',
            query: nome[0],
          }})
          .then((result)=>{
            this.risultatoFilmCercato = result.data.results
          })
      }
      else{
        alert('inserire dati corretti')
      }
    }
  },
}
</script>
<style lang="scss">
</style>
