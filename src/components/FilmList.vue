<template>
  <div class="container" v-if="status">
    <div class="row"> 
      <h1 v-if="search">Risultati:</h1>
      <h1 v-else>Trending:</h1>
      <Film
          v-for='risultato in risultati' 
          :key='risultato.id' 
          :titolo="risultato.title || risultato.name" 
          :titoloOriginale="risultato.original_title || risultato.original_name"
          :lingua="risultato.original_language"
          :voto="risultato.vote_average"
          :img="risultato.poster_path"
          :id="risultato.id"
          @filmEmitted="showFilm"
          class="col-6 col-md-3 col-lg-3 film"
          />
    </div>
  </div>
  <div v-else class="film-info">
    <SpecificheFilm :film="risultati[Math.abs(filmDaMostrare)]"/>
  </div>
</template>

<script>
import Film from './Film.vue'
import SpecificheFilm from './SpecificheFilm.vue'
export default {
    name: 'FilmList',
    components:{
        Film,
        SpecificheFilm,
    },
    data(){
      return{
        status: true,
        filmDaMostrare: 0,
      }
    },
    methods:{
      showFilm(index){
        this.status = false
        this.filmDaMostrare= this.risultati.map((e)=>{
          return e.id;
        }).indexOf(index)
      }
    },
    props:{
        risultati: Array,
        search: Boolean
    }
}
</script>
<style scoped lang='scss'>
    .container{
      padding:100px 15px 40px 15px  ; 
      .film{
        font-size: 14px;
      }
    }
    .film-info{
        min-height: 100vh;
        width: 100vw;
      }
</style>