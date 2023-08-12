<template>
    <div class="container">
        <h1>Formulario de Afiliados</h1>
        <form class="afiliado-form" @submit.prevent="guardar">
            <div class="form-group">
                <label for="id">ID: </label>
                <input type="number" id="id" name="id" required v-model="id"/>
            </div>
            <div class="form-group">
                <label for="documento">Documento: </label>
                <input type="number" id="documento" name="documento" required v-model="documento"/>
            </div>    
            <div class="form-group">
                <label for="nombres">Nombres: </label>
                <input type="text" id="nombres" name="nombres" required v-model="nombres"/>
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos: </label>
                <input type="text" id="apellidos" name="apellidos" required v-model="apellidos"/>
            </div>
            <div class="form-group">
                <label for="edad">Edad: </label>
                <input type="number" id="edad" name="edad" required v-model="edad"/>
            </div>    
            <div class="-form-group">
                <label for="telefono">Teléfono: </label>
                <input type="text" id="telefono" name="telefono" required v-model="telefono"/>
            </div>
            <div class="form-group">
                <label for="correo">Correo: </label>
                <input type="text" id="correo" name="correo" required v-model="correo"/>
            </div>
            <div class="form-group">
                <label for="direccion">Dirección: </label>
                <input type="text" id="direccion" name="direccion" required v-model="direccion"/>
            </div> 
            <div class="form-group">
                <label for="beneficiarios">Beneficiarios: </label>
                <input type="number" id="beneficiarios" name="beneficiarios" required v-model="beneficiarios"/>
            </div>

            <button type="submit" id="guardar" name="guardar">Guardar</button><br/>
            <button type="button" id="eliminar" name="eliminar" @click="eliminar">Eliminar</button><br/>
            <button type="button" id="actualizar" name="actualizar" @click="actualizar">Actualizar</button><br/>
            <button type="button" id="consultar" name="consultar" @click="consultar">Consultar</button><br/>

        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {

    data() {
        return {
            id: null,
            documento: null,
            nombres: "",
            apellidos: "",
            edad: null,
            telefono: "",
            correo: "",
            direccion: "",
            beneficiarios: null
        };
    },

    methods: {
        guardar() {
            axios
                .post("http://localhost:8080/api/afiliado", {
                id : this.id,
                nombres : this.nombres,
                documento : this.documento,
                apellidos : this.apellidos,
                edad : this.edad,
                telefono : this.telefono,
                correo : this.correo,
                direccion : this.direccion,
                beneficiarios : this.beneficiarios,
            })
            .then((response) => {
                console.log("Registro exitoso: ", response.data);
                alert("exito");
                this.id = '';
                this.documento = '';
                this.nombres = '';
                this.apellidos = '';
                this.edad = '';
                this.telefono = '';
                this.correo = '';
                this.direccion = '';
                this.beneficiarios = '';
            })
            .catch((error) => {
                console.error("Error al registar afiliado: ", error);
            });
        },
        consultar() {
            axios
                .get('http://localhost:8080/api/afiliado/'+this.id)
                .then((response) => {
                    this.documento = response.data.documento;
                    this.nombres = response.data.nombres;
                    this.apellidos = response.data.apellidos;
                    this.edad = response.data.edad;
                    this.telefono = response.data.telefono;
                    this.correo = response.data.correo;
                    this.beneficiarios = response.data.beneficiarios;
            })
            .catch((error) => {
                console.error("Erros al consultar afiliado: ", error);
            });
        },
        actualizar() {
            axios
                .put("http://localhost:8080/api/afiliado/actualizar/"+this.id, {
                    id : this.id,
                    nombres : this.nombres,
                    documento : this.documento,
                    apellidos : this.apellidos,
                    edad : this.edad,
                    telefono : this.telefono,
                    correo : this.correo,
                    direccion : this.direccion,
                    beneficiarios : this.beneficiarios,
            })
            .then((response) => {
                console.log("Actualización exitosa: ", response.data);
            })
            .catch((error) => {
                console.error("Error al actualizar afiliado: ", error);
            });
        },
        eliminar() {
            axios
                .delete("http://localhost:8080/api/afiliado/"+this.id)
                .then(() => {
                    console.log("Afiliado eliminado con éxito.");
                    this.documento = null;
                    this.nombres = "";
                    this.apellidos = "";
                    this.edad = null;
                    this.telefono = "";
                    this.correo = "";
                    this.beneficiarios = null;
            })
            .catch((error) => {
                console.error("Error al eliminar afiliado: ", error);
            });
            },
        },
    };
</script>