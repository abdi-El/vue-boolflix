<template>
  <div class="container-header">
      <div class="type">
        <input type="radio" id="movies" name="type" value='movie' v-model="tipo">
        <label for="movies">movies</label>
        <input type="radio" id="tv-series" name="type" value='tv' v-model="tipo">
        <label for="tv-series">tv-series</label>
      </div>
      <input type="text" placeholder="inserisci nome film" v-model.trim="nome" @keyup.enter="getData(), $emit('Cerca', filmDaCercare)">
      <button @click="getData(), $emit('Cerca', filmDaCercare)">Cerca</button>
      <span class="error" v-if="error">INSERIRE CORRETTAMENTE I DATI</span>
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
    props:{
        error: Boolean,
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
    .container-header{
        display: flex;
        align-items: flex-start;
        .type{
            margin: 0px 15px 0px 0px;
            width: 80px;
        }
        button{
            margin: 0px 15px 0px 5px;
        }
        .error{
            color:red;
            text-decoration: underline;
        }
    }
</style>