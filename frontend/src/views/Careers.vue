<template>

<div class ="careers">
       <div class=logo>
      <h1>chicken tinder</h1>
      <i class="fas fa-fire fa-3x"></i>
</div>
  



<h1 style="margin-top: 60px; margin-left: 130px;font-size: 10px; text-align: center">Yinz Guys Wanna Join CutOffJortsCodeCrew</h1>


<h2 style= "font-size: 13px">Wanted: Machine-like cyborgs with 110 years + coding experience</h2>
<p style="padding-top: 30px;font-weight: bold; padding-left: 10px; text-align: center;">


BASIC REQUIREMENTS 

</p>

<p style="font-size: 8px">ie</p>

<p style="font-weight: bold">THE APPLICANT WILL:</p>
<li>Be willing to work unreasonably long hours</li>
<li>Be willing to accept little/no praise for jobs well done...you can always do better</li>
<li>Be willing to accomadate unwanted advances in the workplace</li>
<li>Be appreciative of the fact that, while the job *can* easily and reasonably be completed from home... That doesn't mean it *should* be. <p>We firmly believe you actually perform better while we watch you...See below:</p></li>

<li>While leading with love and respect has proven to be a successful business model, we like to cultivate a culture that fosters fear...</li>
<li>Bonus points if the applicant is willing to cause irreparable damage to It's personal relationships, and overall mental well-being, in order to assimilate properly into our "culture"</li>
<li>This is an unpaid position to start, but we can revist at the 2 year mark pending certain requirements being met [see <router-link v-bind:to="{ name: 'legal' }">Here</router-link>]</li>
<li>If you are the type to turn your head whilst your co-workers are committing fraud, WE WANT YOU!</li>



</div>
  
</template>

<script>

export default {
  name: 'careers',
  components: {
  
  }

}
</script>

<style scoped>

body {
    min-width: 100%;
    margin: 0;
    padding: 0;
    background-color: aqua;
    background-image: url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

h1 {
    font-family: 'Acme', sans-serif;
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




li {
  border: 20 px;
  right: 100px;
}


@media only screen and (max-width: 875px){



.fa-heart {
    font-size: 40px;
}

.fa-times-circle {
    font-size: 40px;
}



}

@media only screen and (max-width: 610px){


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