<template>
  <div id="app">
  
 
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
