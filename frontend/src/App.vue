<template>
  <div id="app">
     
      <h1>chicken tinder</h1>
      <i class="fas fa-fire fa-3x"></i>

  
 
    <nav-bar />
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  name: "app",
  components: {
    NavBar
    },
};
</script>

<style>

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 20px; */
}


h1 {
  font-family: "Acme", sans-serif;
  display: inline;
  color: black;
  font-size: 3.5rem;
}
.fa-fire {
  color: rgb(237, 93, 77);
}

.fa-heart {
  color: rgb(70, 174, 70);
}

.fa-times-circle {
  color: rgb(237, 93, 77);
}




</style>
