<template>
  <div class="container">
    <div v-if="tipo == 'movies'" class="result">
     <Film
      v-for='risultato in risultati' 
      :key='risultato.id' 
      :titolo="risultato.title" 
      :titoloOriginale="risultato.original_title"
      :lingua="risultato.original_language"
      :voto="risultato.vote_average"
      :img="risultato.backdrop_path"
      />
    </div>
    <div v-else class="result">
     <Film
      v-for='risultato in risultati' 
      :key='risultato.id' 
      :titolo="risultato.name" 
      :titoloOriginale="risultato.original_name"
      :lingua="risultato.original_language"
      :voto="risultato.vote_average"
      :img="risultato.backdrop_path"
      />
    </div>
  </div>
  
</template>

<script>
import Film from './Film.vue'
export default {
    name: 'FilmList',
    components:{
        Film
    },
    props:{
        risultati: Array,
        tipo: String
    }
}
</script>
<style scoped lang='scss'>
    .result{
        display: flex;
        flex-wrap: wrap;
    }
</style>