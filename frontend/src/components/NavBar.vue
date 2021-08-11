<template>
<div class='navvy'>
  <div class="logo">
      <h1>chicken tinder</h1>
      <i class="fas fa-fire fa-3x"></i>
    </div>

  <nav>
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'favorites' }"
        >Liked Restaurants</router-link
      >&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'careers' }">Careers</router-link
      >&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'logout' }">Logout</router-link>
    </nav>
    </div>
</template>

<script>

export default {
    name:'nav-bar'

}
</script>

<style>
h1 {
  font-family: "Acme", sans-serif;
  display: inline;
  color: black;
  font-size: 3.5rem;
}
nav {
  position: absolute;
  right: 5px;
  top: 5px;
  font-family: "Roboto", sans-serif;
}
nav a {
  text-decoration: none;
  color: rgb(237, 93, 77);
}


</style>