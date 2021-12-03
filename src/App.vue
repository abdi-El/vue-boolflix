<template>
  <div id="app">
    <Header @Cerca='filmDaCercare'/>
    <FilmList :risultati="risultatoFilmCercato" :search='status' ref ='FilmList' class="filmList"/>
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
      status: false,
    }
  },
  methods:{
    filmDaCercare(nome){
      this.toFalse()
      if(nome != ''){
        // chiamata axios
        this.apiCall(`https://api.themoviedb.org/3/search/multi?`, nome);
        this.status = true;
      }
      else{
        this.apiCall('https://api.themoviedb.org/3/trending/all/week?');
        this.status = false;
      }
    },
    apiCall(link, nome){
       axios.get(link, 
          {params:{
            api_key: '8f561fa6df5ee66570e07ee3b22e98a4',
            query: nome,
          }})
          .then((result)=>{
            this.risultatoFilmCercato = result.data.results
          })
    },
    toFalse(){
      this.$refs.FilmList.toFalse()
    }
  },
  created(){
     this.apiCall('https://api.themoviedb.org/3/trending/all/week?');
     this.status = false;
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap');
#app{
  background-color: #001845;
  color: white;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}
</style>
