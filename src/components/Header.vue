<template>
  <div class="container-header mb-2 w-100">
      <div class="type w-25">
        <input type="radio" id="movies" name="type" value='movie' v-model="tipo">
        <label for="movies" class="me-2">movies</label>
        <input type="radio" id="tv-series" name="type" value='tv' v-model="tipo" class="me-1">
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
        align-items: center;
        justify-content: center;
        background-color: #0d3b66;
        box-shadow: 0px 12px 20px 5px #001233;
        position: fixed;
        height: 70px;
        z-index: 1;
        .type{
            margin: 0px 15px 0px 0px;
            width: 80px;
        }
        &>input{
            background-color: #001845;
            border: none;
            border-radius: 5px;
            color: white;
            outline: none;
        }
        button{
            margin: 0px 15px 0px 5px;
            background-color: #0466c8;
            border-radius: 5px;
            border: none;
            box-shadow: 2px 2px 5px black;
            transition: box-shadow 0.03s;
            &:active{
                box-shadow: none;
            }
        }
        .error{
            color:red;
            text-decoration: underline;
        }
    }
</style>