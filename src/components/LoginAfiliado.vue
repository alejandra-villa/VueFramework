<template> 
    <body class="cuerpo">
        <section>
            <h5>Iniciar sesión</h5>
            <h6>Sucursal virtual</h6>
            <form>
                <div class="form-group-l">
                    <input class="controls" type="text" name="id" placeholder="Tipo de identificacion" required v-model="id"/>

                </div>
                <div  class="form-group-l">
                    <input class="controls" type="number" name="numero" placeholder="Numero de identificacion" required v-model="numero"/>

                </div>
                <div  class="form-group-l">
                    <input class="controls" type="password" name="contraseña" placeholder="Contraseña" required v-model="contraseña"/>
                </div>
            </form> 
            <div class="text">
                <p><a href="#">¿Has olvidado tu contraseña?</a></p>
                <button class="button-login" id="ingresar" type="submit" name="ingresar" @click="sesion">Ingresar</button><br/>
                <p>¿Aun no tienes cuenta?</p>
                <p><a href="#">Crea una cuenta</a></p>
            </div>
        </section>
        

    </body>
</template>

<script>
import axios from "axios";
import auth from "@/router/auth";

export default{
    
    data() {
        return {
            id: "",
            numero: null,
            contraseña: ""
        };
    },
    
    methods: {
        guardar() {
            axios
            .post("http://localhost:8080/api/usuario", {
                id: this.id,
                numero: this.numero,
                contraseña: this.contraseña,
            })
            .then((response) => {
                console.log("Registro exitoso.", response.data);
                alert("Registro exitoso.");
                this.id = '';
                this.numero = '';
                this.contraseña = '';
            })
            .catch((error) => {
                console.error("Error al registrar", error) 
            });
        },
        async sesion() {
                try {
                    await auth.login(this.id, this.numero, this.contraseña),
                    this.$router.push("/")
                } catch(error) {
                this.error = true
            }
        },
    },
};
</script>

