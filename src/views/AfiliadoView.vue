<template>
    <div class="afiliado">
        <div class="components">
            <FormularioAfiliado/>
            <TablaAfiliado/>
        </div>
    </div>
</template>

<script>
import FormularioAfiliado from '@/components/FormularioAfiliado.vue';
import TablaAfiliado from '@/components/TablaAfiliado.vue';

export default {
    name: 'AfiliadoView',
    components: {
        FormularioAfiliado,
        TablaAfiliado
    }
}
</script>

<style>
body {
    font-family: Poppins, sans-serif;
    background-color: fff;
    margin: 0;
    padding: 0;
}

.components{
    display: grid;
    grid-template-columns: 1fr 2fr;
   grid-auto-rows: 1fr;

}
.container {
   /* max-width: 400px;*/
    margin:1rem;
    padding: 1rem;
    background-color: whitesmoke;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

form{

    padding: 2%;
    
}
label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #34491A;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: rgb(95, 160, 144);
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    
}

th, td {
    padding: 10px;
    text-align: left;
 /*   border-bottom: 1px solid #ddd;*/
 border-style: solid;
    
}
tr{

    border-style: solid;
}

th {
    background-color: #34491A;
    color: #fff;
    border-style: solid;
}

tr:hover {
    background-color: #f5f5f5;
}
</style>