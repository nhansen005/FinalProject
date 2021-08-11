<template>
<div class ="careers">
    <nav>
        <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'favorites' }">Liked Restaurants</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'careers' }">Careers</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'logout' }">Logout</router-link>
    </nav>




<h1 style="margin-top: 60px; font-size: 10px; text-align: center">Yinz Guys Wanna Join CutOffJortsCodeCrew</h1>


<h2 style= "font-size: 13px">Wanted: Machine-like cyborgs with 110 years + coding experience</h2>
<p style="padding-top: 30px;font-weight: bold; padding-left: 10px; text-align: center;">


BASIC REQUIREMENTS 

</p>

<p style="font-size: 8px">ie</p>

<p style="font-weight: bold">THE APPLICANT WILL:</p>
<li>Be willing to work unreasonably long hours</li>
<li>Be willing to accomadate unwanted advances in the workplace</li>
<li>Be appreciative of the fact that, while the job *can* easily and reasonably be completed from home... That doesn't mean it *should* be. <p>We firmly believe you actually perform better while we watch you...See below:</p></li>

<li>Be appreciative of our culture, and while leading with love and respect has proven to be a successful business model, we like to harvest a culture that leads by fear...</li>
<li>Bonus points if the applicant is willing to cause irreparable damage to it's personal relationships and overall mental well-being in order to assimilate properly into our "culture"</li>
<li>This is an unpaid position to start, but we can revist at the 2 year mark pending certain requirements being met [see <router-link v-bind:to="{ name: 'legal' }">Here</router-link>]</li>




</div>
  
</template>

<script>
export default {
  name: 'careers'

}
</script>

<style scoped>

body {
    min-width: 100%;
    margin: 0;
    padding: 0;
    background-image: url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

h1 {
    font-family: 'Acme', sans-serif;
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

.fa-fire {
    color: rgb(237, 93, 77);
}

.fa-heart {
    color: rgb(70, 174, 70);
}

.fa-times-circle {
    color: rgb(237, 93, 77);
}

.like {
  position: fixed;
  right: 10vw;
  top: 45vh;
  
}



.dislike {
  position: fixed;
  left: 10vw;
  top: 45vh;
}

.restaurant-card {
    border: 5px solid black;
    margin: 0 auto;
    padding: 0;
    width: 50vw;
    height: 75vh;
}

.restaurant-details {
    border: 5px solid black;
    margin: 0 auto;
    padding: 0;
    width: 50vw;
    height: 75vh;
}
.restaurant-info {
    margin: 0 auto;
    padding: 0;
    width: 50vw;
    height: 75vh;
}

.restaurant-detailed-info {
    background-color: rgba(36, 35, 35, 0.591);
   
}

.location {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
}

.location:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: .5s;
}

.restaurant-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

ul {
    display: inline;
}

.categories {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px;
    margin-bottom: 20px;
    border-radius: 10px;
    transition: .5s;
    max-width: 35vw;
}

.categories:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: .5s;
}
.restaurant-name {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    margin-left: 40px;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px;
    border-radius: 10px;
    max-width: 35vw;
    display: inline-block;
    transition: .5s;
}

.restaurant-name:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: .5s;
}

.average-rating {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
    transition: .5s;
    max-width: 35vw;
}

.open {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
    transition: .5s;
    max-width: 35vw;
}

.open:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: .5s;
}

.average-rating:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: .5s;
}

.restaurant-price {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
}

.restaurant-price:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: .5s;
}

.restaurant-info {
    position: absolute;
}

.show-details {
    display:inline-block;
    margin: 10px;
    width: 40vw;
    height: 8vh;
    border: 0.16em solid rgb(77, 114, 237);
    border-radius: 6px;
    background-color: rgb(77, 114, 237);
    text-decoration:none;
    text-transform:uppercase;
    font-family:'Roboto',sans-serif;
    font-size: 1.2rem;
    color:rgb(255, 255, 255);
    text-align:center;
    transition: all 0.15s;
}

.show-details-div {
    text-align: center;
}
button:hover {
    background-color:rgb(69, 102, 211);
    border-color: rgb(69, 102, 211);
}
h2 {
 font-family: "Roboto", sans-serif;
    position: absolute;
    right: 50px;
    top: 25px;
    color: rgb(237, 93, 77);
}
h3 {
    font-family: "Roboto", sans-serif;
    position: absolute;
    right: 50px;
    top: 25px;
    color: rgb(237, 93, 77);
}

.custom-search {
    font-family: "Roboto", sans-serif;
    position: absolute;
    right: 25px;
    top: 85px;
}

#cust-location, #category, #search {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
}

#cust-location {
    margin-top: 5px;
    margin-bottom: 5px;
}

li {
  border: 20 px;
  right: 100px;
}

label {
    font-family: 'Roboto', sans-serif;
}

@media only screen and (max-width: 875px){

.restaurant-card, .restaurant-details, .restaurant-info {
    width: 75vw;
}

.show-details {
    font-size: 1rem;
    width: 35vw;
}

.like {
  position: absolute;
  top: 87vh;
  right: 25vw;
}

.dislike {
  position: absolute;
  top: 87vh;
  left: 25vw;
}

.fa-heart {
    font-size: 40px;
}

.fa-times-circle {
    font-size: 40px;
}
.restaurant-detailed-info .restaurant-name {
    margin-bottom: 0;
}

.restaurant-detailed-info .categories {
    display: none;
}


}

@media only screen and (max-width: 610px){

.restaurant-card, .restaurant-details, .restaurant-info {
    width: 97vw;
}

.show-details {
    display: none;
}

h1, .fa-fire {
    margin-top: 40px;
    font-size: 2rem;
}

h3 {
    display: flex;
   
}

.restaurant-name {
    max-width: 60vw;
    font-size: 1.5rem;
}

}
    </style>