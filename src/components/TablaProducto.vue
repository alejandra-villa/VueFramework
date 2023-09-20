<template>
    <div class="cont">
        <h1>Tabla Productos</h1>
        <table>
            <thead>
                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>Proveedor</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in producto" :key="producto.id">
                    <td>{{ producto.id }}</td>
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.descripcion }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>{{ producto.categoria }}</td>
                    <td>{{ producto.proveedor }}</td>
                </tr>

                <router-view/>

            </tbody>
        </table>
    </div>
</template>
 
<script>
import axios from "axios";

export default {

    data() {
        return {
            producto: [],
        };
    },
    methods: {
        obtenerProductos() {
            axios.get("http://localhost:8080/api/productos/listar")
            .then((response) => {
                this.producto = response.data;
            })
            .catch((error) => {
                console.error("Erros al obtener productos:", error);
            });
        },
    },
    mounted() {
        this.obtenerProductos();
    },
};
</script>