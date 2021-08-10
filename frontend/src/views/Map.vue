<template>
  <div id="map">
      <!-- <div style="padding: 10px 0">
            <div>
                <label style="display: inline-block; width: 60px; color: #FFF">Start</label>
                <input type="text" v-model="start" />
            </div>
            <div>
                <label style="display: inline-block; width: 60px; color: #FFF">Finish</label>
                <input type="text" v-model="finish" />
            </div>
            <button type="button" v-on:click="route()">Route</button>
        </div>
        <HereMap ref="map" appId="APP-ID-HERE" appCode="APP-CODE-HERE" lat="37.7397" lng="-121.4252" width="60" height="530px" /> -->
       
  
     
      <HereMap 
      ref='map'
      apiKey='kGW-Tq6lUAOPCD6Q4c982m8u--CPdE1LkMmCt6mvYgM'
      appId='VzXIQvJnzIm3MfFwpd88' 
      latitude='37'
      longitude='121'
      zoom='10'
      />
    
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
   
    <router-view />
    
  </div>
</template>
<script>
import React from 'react'
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
    lng: 70.9959
    }
}
  
  },
  mounted() {
    let map = this.$refs.map
    map.drawRoute(
      {
        lat: '27',
        lng: '122'
      },
      {
        lat: '35',
        lng: '121'
      }

    )
  }
}
</script>

<style>
#map {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
