<template>
    <div class="card" >
        <div class="content-i">
            <img v-if="img != undefined " :src="`https://image.tmdb.org/t/p/w342${img}`" alt="film img" class="w-100 poster">
            <img v-else src="https://www.omil.it/images/no_image.png" alt="film img" class="w-100 poster">
        </div>
        <ul class="content-d">
            <li><strong>Titolo:</strong> {{titolo}}</li>
            <li><strong>Titolo Originale:</strong> {{titoloOriginale}}</li>
            <li>
                <div v-if="lingua == 'it'"><img src="../assets/flags/it.png" alt="italian flag" class="flag"></div>
                <div v-else-if="lingua == 'en'"><img src="../assets/flags/en.png" alt="english flag" class="flag"></div>
                <div v-else >{{lingua}}</div>
                </li>
            <li class="d-flex align-items-center">
                <span><strong>Voto Medio:</strong></span>
                <svg v-for='n in parseInt((voto/2).toFixed())' :key="`${titoloOriginale}-${n}`" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>    
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Fiml',
    props: {
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        img: String,
    },
    data(){
        return{
            newVoto: (this.voto/2).toFixed(),
        }
    },
}
</script>

<style scoped lang='scss'>
    .card{
        border: none;
        background-color: transparent;
        padding: 10px;
        position: relative;
        box-shadow: none;
        transition: box-shadow 0.2s;
        .content-i{
            position: relative;
            top: 0;
            transition: opacity 0.1s, top 0.2s;
        }
        &:hover{
            cursor: pointer;
            box-shadow: 0px 0px 21px 11px #001233;
        }
        &:hover .content-i{ 
            top: -15%;
            opacity: 0;
        }
        &:hover .content-d{
            top: -50%;
            opacity: 100%;
        }
        .poster{
                border-radius:10px;
            }
        .content-d{
            list-style: none;
            position: relative;
            top: -30%;
            opacity: 0;
            transition: opacity 0.1s, top 0.2s;
            height: 0;
            .flag{
                width: 25px;
             }
             svg{
                fill: yellow;
            }
        }
    }
    
</style>