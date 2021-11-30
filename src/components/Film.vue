<template>
    <ul>
        <img :src="`https://image.tmdb.org/t/p/w342${img}`" alt="film img">
        <li><strong>Titolo:</strong> {{titolo}}</li>
        <li><strong>Titolo Originale:</strong> {{titoloOriginale}}</li>
        <li>
            <div v-if="lingua == 'it'"><img src="../assets/flags/it.png" alt="italian flag" class="flag"></div>
            <div v-else-if="lingua == 'en'"><img src="../assets/flags/en.png" alt="english flag" class="flag"></div>
            <div v-else >{{lingua}}</div>
            </li>
        <li><strong>Voto Medio:</strong> {{voto}}</li>
    </ul>
</template>

<script>
export default {
    name: 'Fiml',
    props: {
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        img: String
    }
}
</script>

<style scoped lang='scss'>
    ul{
        list-style: none;
        border: 1px solid gray;
        margin: 2px;
        padding: 3px;
        .flag{
        width: 25px
        }
    }
    
</style>