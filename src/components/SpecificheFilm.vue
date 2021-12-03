<template>
  <div class="container">
    <div class="row">
            <div class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16" @click="$emit('back')">
                    <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                    <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>      
            </div>
            <div class="col-12 col-md-6 img-container">
                <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="film poster">
                <p>{{film.overview}}</p>
            </div>
            <div class="col-12 col-md-6 data-container">
                <h3>{{film.title || film.name}}</h3>
                <div class="cast">
                    <h6>CAST:</h6>
                    <div class="cast-img">
                        <ul>
                            <li v-for="personaggio in risultatoCastCercato" :key="`${personaggio.id}-personaggio`">
                                <img :src="`https://image.tmdb.org/t/p/w300/${personaggio.profile_path}`" alt="cast img">
                                <div>
                                    <p><strong>Nome:</strong>  {{personaggio.name}}</p>
                                    <p><strong>personaggio:</strong> {{personaggio.character}}</p>
                                </div>
                            </li>
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
            risultatoCastCercato: [],
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
                    this.risultatoCastCercato = [];
                    result.data.cast.forEach(element => {
                        if (this.risultatoCastCercato.length <= 5){
                            this.risultatoCastCercato.push(element)
                        } 
                    });
                    
                })
    }
}
</script>
<style scoped lang='scss'>
    .row{
        justify-content: space-between;
        padding: 10px;
        font-weight: 300;
        .arrow{
            svg{
                scale: 2;
                cursor: pointer;
                transition: color 0.15s;
                &:hover{
                    color: #e60a14;
                    
                }
                &:hover path{
                    box-shadow: 0px 0px 15px 5px black;
                }
            }
        }
        .img-container{
            text-align: center;
            padding: 15px;
            font-size: 20px;
            img{
                border-radius: 25px;
                width: 50%;
                margin-bottom: 10px ;
            }
        }
        .data-container{
            padding: 10px;
            box-shadow: 0px 0px 15px 5px black;
            background-color: #0d3b66;
            ul{
                display: flex;
                flex-wrap: wrap;
                list-style: none;
                li{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 10px;
                    transition: scale 0.1s, box-shadow 0.1s;
                    &:hover{
                        cursor: pointer;
                        box-shadow: 0px 0px 15px 1px black;
                        scale: 1.01;
                    }
                    img{
                    border-radius: 15px;
                    width: 20%;
                    margin-right: 10px;
                    }
                }
            }
        }
    }
    
</style>