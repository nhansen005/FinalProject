<template>
<div class ="careers">
    <nav>
        <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'favorites' }">Liked Restaurants</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'careers' }">Careers</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'logout' }">Logout</router-link>
    </nav>


<h1>Yinz Guys Wanna Join CutOffJortsCodeCrew</h1>


<h3>Wanted: Machine-like cyborgs with 110 years + coding experience</h3>
<p>Must be willing to work unreasonably long hours</p>
<p>Bonus points if willing to cause irreparable damage to your personal relationships and overall mental well-being in order to assimilate properly into our "culture"</p>
<p>This is an unpaid position to start, but we can revist at the 2 year mark pending certain requirements being met [see <router-link v-bind:to="{ name: 'legal' }">Here</router-link></p>

</div>
  
</template>

<script>
export default {
  name: 'careers'

}
</script>

<style>

</style>