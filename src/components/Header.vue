<template>
  <div class="container-header mb-2 w-100">
    <a @click="$emit('Cerca', '')" class="h-100"><img src="https://www.smartworld.it/wp-content/uploads/2018/06/Netflix-Down.png" class="h-100" alt=""></a>
    <div class="input d-flex justify-content-end w-50 pe-3">
        <input type="text" placeholder="inserisci nome film" v-model.trim="nome" @keyup.enter="$emit('Cerca', nome)" class="input-field">
        <button @click="$emit('Cerca', nome)">Cerca</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            nome:'',
        }
    }
}
</script>

<style lang='scss' scoped>
    .container-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #0d3b66;
        box-shadow: 0px 12px 20px 5px #001233;
        position: fixed;
        height: 70px;
        z-index: 1;
        font-weight: 100;
        a:hover{
            cursor: pointer;
            width: 50%;
            
        }
        .input-field{
            background-color: #001845;
            border: 1px solid #0466c8;
            width: 50%;
            border-radius: 5px;
            color: white;
            outline: none;
            font-weight: 100;
        }
        button{
            margin: 0px 15px 0px 5px;
            background-color: #0466c8;
            border-radius: 5px;
            border: none;
            box-shadow: 2px 2px 3px black;
            transition: box-shadow 0.03s;
            color: white;
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