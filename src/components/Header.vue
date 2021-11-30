<template>
  <div class="container">
      <div class="type">
        <input type="radio" id="movies" name="type" value='movies' v-model="tipo">
        <label for="movies">movies</label>
        <input type="radio" id="tv-series" name="type" value='tv-series' v-model="tipo">
        <label for="tv-series">tv-series</label>
      </div>
      <input type="text" placeholder="inserisci nome film" v-model.trim="nome" @keyup.enter="$emit('Cerca', filmDaCercare)">
      <button @click="getData(), $emit('Cerca', filmDaCercare)">Cerca</button>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            nome:'',
            tipo: '',
            filmDaCercare: [],
        }
    },
    methods:{
        getData(){
            this.filmDaCercare= [];
            this.filmDaCercare.push(this.nome, this.tipo);
        }
    }
}
</script>

<style lang='scss' scoped>
    .container{
        display: flex;
        align-items: flex-start;
        .type{
            margin: 0px 15px 0px 0px;
            width: 80px;
        }
    }
</style>