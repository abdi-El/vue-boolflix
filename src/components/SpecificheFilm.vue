<template>
  <div class="container">
    <div class="row">
            <div class="col-12 col-md-6 img-container d-flex">
                <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
            </div>
            <div class="col-12 col-md-6 data-container">
                <h5><strong><u>Titile:</u></strong> ' {{film.title || film.name}} '</h5>
                <span><strong><u>Date:</u></strong> {{film.first_air_date || film.release_date}}</span>
                <div class="cast">
                    <h4>CAST:</h4>
                    <div class="cast-img">
                        <ul>
                            <li v-for="personaggio in risultatoCastCercato" :key="`${personaggio.id}-personaggio`"><img :src="`https://image.tmdb.org/t/p/w185/${personaggio.profile_path}`" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SpecificheFilm',
    data(){
        return{
            type: this.film.name != null ? 'tv':'movie',
            risultatoCastCercato: null,
        }
    },
    props: {
        film:Object
    },
    created(){
        axios.get(`https://api.themoviedb.org/3/${this.type}/${this.film.id}/credits?`, 
                {params:{
                    api_key: '8f561fa6df5ee66570e07ee3b22e98a4',
                }})
                .then((result)=>{
                    this.risultatoCastCercato = result.data.cast
                    console.log(this.risultatoCastCercato)
                })
    }
}
</script>
<style scoped lang='scss'>
    .row{
        justify-content: space-between;
        .img-container{
            justify-content: center;
            align-items: flex-start;
            img{
                border-radius: 25px;
                width: 50%;
            }
        }
        .data-container{
            padding: 10px;
            box-shadow: 0px 0px 15px black;
            ul{
                display: flex;
                flex-wrap: wrap;
                list-style: none;
                img{
                    width: 30%;
                }
            }
        }
    }
    
</style>