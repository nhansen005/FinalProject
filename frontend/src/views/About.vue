<template>
<div style="background-image: 'public/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg'">

<h2 style="text-align: center">
    The team behind Chicken Tinder:
</h2>

<div id='noel'>
<h3><a href="https://www.linkedin.com/in/noel-hansen/" target="_blank">Noel Hansen </a></h3>
<p>A.K.A.</p>
<p>The Major Key Alert</p>
<p>A.K.A.</p>
<p>...And Another One</p>
</div>

<div id='eric'>
<h3><a href="https://www.linkedin.com/in/erickrouse/" target="_blank">Eric Krouse </a></h3>
<p>A.K.A.</p>
<p>Silky</p>
<p>A.K.A.</p>
<p>The Wizard of Krouse</p>
</div>

<div id='dj'>
<h3><a href="https://www.linkedin.com/in/ayodeji-akinbode-a5276020b/" target="_blank">DJ Akinbode </a></h3>
<p>A.K.A.</p>
<p>AYO DeeeeeeeeJJJJJJJJJJ</p>
<p>A.K.A.</p>
<p>Mr. Smooth</p>
</div>

<div id='robert'>
<h3><a href="https://www.linkedin.com/in//mrobertmarks/" target="_blank">M.Robert Marks </a></h3>
<p>A.K.A.</p>
<p>The Carnival Kid</p>
<p>A.K.A.</p>
<p>Da Bonfiyah</p>
</div>

<div id='sasan'>
<h3><a href="https://www.linkedin.com/in//sasan1200/" target="_blank">Sasan Sotoodehfar </a></h3>
<p>A.K.A.</p>
<p>Sonny</p>
<p>A.K.A.</p>
<p>Abstract Method Guy</p>
</div>

<div style="text-align: center">
<router-link v-bind:to="{ name: 'careers' }">Careers</router-link>
</div>

</div>
  
</template>

<script>
export default {
    name: "about"

}
</script>

<style scoped>

h1{
    text-align: center;
}

#noel{
    font-family: monospace;
    color: blue;
    text-align: center
}
#eric{
    font-family: monospace;
    color: red;
    text-align: center
}

#dj{
    font-family: monospace;
    color: rgb(141, 10, 141);
    text-align: center
}

#robert{
    font-family: monospace;
    color: rgb(2, 75, 2);
    text-align: center
}
#sasan{
    font-family: monospace;
    color: rgb(10, 58, 66);
    text-align: center
}

</style>