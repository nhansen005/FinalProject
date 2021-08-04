<template>
  <div id="map">
       
    <div id="nav">
      <section class="is-small">
      <HereMap  :center="center" />
      </section>
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
    </div>
    <router-view />
    
  </div>
</template>
<script>

import HereMap from './components/HereMap.vue'
export default {
  name: 'map',
  components: {
    HereMap
    
  },
  data() {
return {
    // prop to the HereMap component -- defaults to pittsburgh
  center:{ 
    lat: 40.445, 
    lng: -79.9959
    }
}
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
