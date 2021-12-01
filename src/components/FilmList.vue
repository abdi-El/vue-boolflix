<template>
  <div class="container">
    <div class="row">
      <div v-if="tipo == 'movie'" class="result">
      <Film
        v-for='risultato in risultati' 
        :key='risultato.id' 
        :titolo="risultato.title" 
        :titoloOriginale="risultato.original_title"
        :lingua="risultato.original_language"
        :voto="risultato.vote_average"
        :img="risultato.poster_path"
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
        :img="risultato.poster_path"
        />
      </div>
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