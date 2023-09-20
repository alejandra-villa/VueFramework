<template>
    <div class="login">
        <LoginAfiliado/>
    </div>
</template>

<script>
import LoginAfiliado from '@/components/LoginAfiliado.vue';

export default {

    name: 'LoginView',
    components: {
        LoginAfiliado
    }
}
</script>

<style>
html {
    font-family: 'Poppins', sans-serif;
}

.cuerpo {
    margin: 0;
    width: auto;
    background-color: rgb(239, 250, 247);
}

section {
    width: 500px;
    height: 500px;
    text-align: center;
    margin: auto;
    padding: 1%;
    color: #34491A;
    background-color: whitesmoke;
    box-shadow: 7px 13px 37px gray;;
}

section h5 {
    margin:auto;
    text-align: center;
    height: 40px;
    margin-bottom: 30px;
    font-size: 30px;
}

section h6 {
    margin:auto;
    text-align: center;
    height: 20px;
    margin-bottom: 15px;
    font-size: 15px;
}

.form-group-l{
    width: 80%;
    height: 80%;
    text-align: center;
    margin-left: 8%;
    
}

.controls {
    width: 100%;
    border: 1px solid black;
    margin-bottom: 15px;
    padding: 11px 10px;
    font-size: 14px;
    font-weight: bold;
}

.text {
    text-align: center;
    padding: auto;
    margin: auto;
    font-size: 14px;
    font-weight: bold;
    color: gray;
}

.text a{
    text-decoration: none;
    color: gray;
}

.text a:hover{
    text-decoration: underline;
    color: rgb(73, 95, 98);;
}

.text p:hover{
    text-decoration: underline;
    color: rgb(73, 95, 98);;
}

.button-login{
    border: 1px solid black;
    border-radius: 1%;
    background-color: #34491A;
    font-size: 14px;
    font-weight: bold;
    color: white;
    padding: 10px;
    margin: 10px;
    width: 40%;
    align-items: center;
}

.button-login:hover{
    background-color: rgb(95, 160, 144);
}
</style>