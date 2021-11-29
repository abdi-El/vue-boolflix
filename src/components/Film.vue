<template>
    <ul>
        <li><strong>Titolo:</strong> {{titolo}}</li>
        <li><strong>Titolo Originale:</strong> {{titoloOriginale}}</li>
        <li>
            <div v-if="lingua == 'it'"><img src="../assets/flags/it.png" alt="italian flag"></div>
            <div v-else-if="lingua == 'en'"><img src="../assets/flags/en.png" alt="english flag"></div>
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
        voto: Number
    }
}
</script>

<style scoped>
    img{
        width: 25px
    }
</style>