<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/afiliados">Afiliado</router-link> |
    <router-link to="/productos">Productos</router-link> |
    <router-link to="/login">Iniciar Sesión</router-link> 
  </nav>
  <router-view/>
</template> 

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration-line: none;
} 


nav a.router-link-exact-active {
  color: rgb(73, 95, 98);
}
</style>
