<template>
  <div class="container">
    <div class="row">
      <Film
          v-for='risultato in risultati' 
          :key='risultato.id' 
          :titolo="risultato.title || risultato.name" 
          :titoloOriginale="risultato.original_title || risultato.original_name"
          :lingua="risultato.original_language"
          :voto="risultato.vote_average"
          :img="risultato.poster_path"
          class="col-6 col-md-3 col-lg-3"
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
        tipo: String,
    }
}
</script>
<style scoped lang='scss'>
    .container{
      padding:100px 0px 40px 0px  ; 
    }
</style>