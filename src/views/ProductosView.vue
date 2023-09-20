<template>
    <div class="productos">
        <div class="components">
            <FormularioProducto/>
            <TablaProducto/>
        </div>
    </div>
</template>

<script>

import FormularioProducto from '@/components/FormularioProducto.vue';
import TablaProducto from '@/components/TablaProducto.vue';

export default {
    name: 'ProductosView',
    components : {
    FormularioProducto,
    TablaProducto
}
}

</script>

<style>

.components {
    display: grid;
    grid-template-columns: 1fr 2fr;
   grid-auto-rows: 1fr;
}
.cuerpo {
    font-family: Poppins, sans-serif;
    background-color: fff;
    margin: 0;
    padding: 0;
}

.producto-form {
    margin: 2%;
    padding: 2%;
    background-color: whitesmoke;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.form-pr {
    margin-bottom: 15px;
}

form {
    padding: 2%;
}


label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 95%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 1px;
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
    margin-top: 1%;
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