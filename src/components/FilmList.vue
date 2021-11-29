<template>
  <div>
      <Film 
      v-for='risultato in risultati' 
      :key='risultato.id' 
      :titolo="risultato.title" 
      :titoloOriginale="risultato.original_title"
      :lingua="risultato.original_language"
      :voto="risultato.vote_average"
      />

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
        risultati: Array
    }
}
</script>
<style>

</style>