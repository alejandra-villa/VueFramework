import axios from "axios";

const ENDPOINT_PATH = "http://localhost:8080/api/usuario/login";

export default {
    login(id, numero, contraseña) {
        const user = {id, numero, contraseña };
        return axios.post(ENDPOINT_PATH + "login", user);
      },
};