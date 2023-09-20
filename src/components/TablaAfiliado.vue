<template>
    <div class="container">
        <h1>Tabla de Afiliados</h1>
        <table>
            <thead>
                <tr>

                    <th>ID</th>
                    <th>Documento</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Edad</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Dirección</th>
                    <th>Beneficiarios</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="afiliado in afiliado" :key="afiliado.id">
                    <td>{{ afiliado.id }}</td>
                    <td>{{ afiliado.documento }}</td>
                    <td>{{ afiliado.nombres }}</td>
                    <td>{{ afiliado.apellidos }}</td>
                    <td>{{ afiliado.edad }}</td>
                    <td>{{ afiliado.telefono }}</td>
                    <td>{{ afiliado.correo }}</td>
                    <td>{{ afiliado.direccion }}</td>
                    <td>{{ afiliado.beneficiarios }}</td>
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
            afiliado: [],
        };
    },
    methods: {
        obtenerAfiliados() {
            axios.get("http://localhost:8080/api/afiliado/listar")
            .then((response) => {
                this.afiliado = response.data;
            })
            .catch((error) => {
                console.error("Erros al obtener afiliados:", error);
            });
        },
    },
    mounted() {
        this.obtenerAfiliados();
    },
};
</script>