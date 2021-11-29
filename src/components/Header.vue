<template>
  <div>
      <input type="text" placeholder="inserisci nome film" v-model="filmDaCercare">
      <button @click="$emit('Cerca', filmDaCercare)">Cerca</button>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            filmDaCercare: '',
        }
    }
}
</script>

<style lang='scss' scoped>
    input{
        margin: 0px 5px;
    }
</style>