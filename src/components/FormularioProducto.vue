<template> 
    <div class="contenedor">
        <h1>Formulario de Productos</h1>
        <form class="producto-form" @submit.prevent="save">
            <div class="form-pr">
                <label for="id">ID: </label>
                <input type="number" id="id" name="id" v-model="id"/>
            </div>
            <div class="form-pr">
                <label for="nombre">Nombre: </label>
                <input type="text" id="nombre" name="nombre" required v-model="nombre"/>
            </div>    
            <div class="form-pr">
                <label for="descripcion">Descripción: </label>
                <input type="text" id="descripcion" name="descripcion" required v-model="descripcion"/>
            </div>
            <div class="form-pr">
                <label for="precio">Precio: </label>
                <input type="number" id="precio" name="precio" required v-model="precio"/>
            </div>
            <div class="form-pr">
                <label for="categoria">Categoria: </label>
                <input type="number" id="categoria" name="categoria" required v-model="categoria"/>
            </div>    
            <div class="-form-pr">
                <label for="proveedor">Proveedor: </label>
                <input type="number" id="proveedor" name="proveedor" required v-model="proveedor"/>
            </div>

            <button type="submit" id="save" name="save">Guardar</button><br/>
            <button type="button" id="annul" name="annul" @click="annul">Eliminar</button><br/>
            <button type="button" id="edit" name="edit" @click="edit">Actualizar</button><br/>
            <button type="button" id="consult" name="consult" @click="consult">Consultar</button><br/>

        </form>
    </div>
</template>

<script>

import axios from "axios";

export default {

    data() {
        return {
            id: null,
            nombre: "",
            descripcion: "",
            precio: null,
            categoria: null,
            proveedor: null
        };
    },

    methods: {
        save() {
            axios
                .post("http://localhost:8080/api/productos", {
                    id: this.id,
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    precio: this.precio,
                    categoria: this.categoria,
                    proveedor: this.proveedor,
            })
            .then((response) => {
                console.log("Registro exitoso", response.data);
                alert("Registro exitoso");
                this.id = '';
                this.nombre = '';
                this.descripcion = '';
                this.precio = '';
                this.categoria = '';
                this.proveedor = '';
            })
            .catch((error) => {
                console.error("Error al registar producto.", error);
            });
        },
        consult() {
            axios
            .get('http://localhost:8080/api/productos/'+this.id)
            .then((response) => {
                this.nombre = response.data.nombre;
                this.descripcion = response.data.descripcion;
                this.precio = response.data.precio;
                this.categoria = response.data.categoria;
                this.proveedor = response.data.proveedor;
            })
            .catch((error) => {
                console.error("Erros al consultar producto.", error);
            });
        },
        edit() {
            axios
            .put("http://localhost:8080/api/productos/actualizar/"+this.id, {
                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio,
                categoria: this.categoria,
                proveedor: this.proveedor,
            })
            .then((response) => {
                console.log("Actualización exitosa.", response.data);
            })
            .catch((error) => {
                console.error("Error al actualizar producto.", error);
            });
        },
        annul() {
            axios
            .delete("http://localhost:8080/api/productos/"+this.id)
            .then(() => {
                console.log("Producto eliminado con exito");
                this.id = null;
                this.nombre = "";
                this.descripcion = "";
                this.precio = null;
                this.categoria = null;
                this.proveedor = null;
            })
        }
    }
}

</script>