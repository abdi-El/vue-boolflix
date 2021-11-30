<template>
  <div v-if="risultati.includes(risultati[0].title)">
      <Film
      v-for='risultato in risultati' 
      :key='risultato.id' 
      :titolo="risultato.title" 
      :titoloOriginale="risultato.original_title"
      :lingua="risultato.original_language"
      :voto="risultato.vote_average"
      />
  </div>
  <div v-else>
     <Film
      v-for='risultato in risultati' 
      :key='risultato.id' 
      :titolo="risultato.name" 
      :titoloOriginale="risultato.original_name"
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