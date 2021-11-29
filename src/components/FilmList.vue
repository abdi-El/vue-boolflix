<template>
  <div>
      <span v-for='risultato in risultati' :key='risultato.id'>ciao </span>
  </div>
</template>

<script>
export default {
    name: 'FilmList',
    props:{
        risultati: Array
    }
}
</script>

<style>

</style>