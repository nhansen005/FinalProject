<template>
  <div id="tinders">
    <!-- <div class="logo">
      <h1>chicken tinder</h1>
      <i class="fas fa-fire fa-3x"></i>
    </div> -->

    <favorites-list />
  </div>
</template>
 
<script>

import FavoritesList from "../components/FavoritesList.vue";
import tinderService from "../services/TinderService";
export default {
  components: { FavoritesList },
  name: "business-summary",
  data() {
    return {
      restaurants: [],
    };
  },

  beforeCreate(){
    tinderService
      .getFavorites()
      .then((response) => {
        this.restaurants = response.data;
      })
      .catch((err) => {
        console.log(err);
      });

  },
  methods: {
    removeFavorites() {
    tinderService
      .deleteFavorites()
      .then((response) => {
        if (response.status == 200) {
          console.log("Yee sonnnn you got dat list");
          return this.$store.state.favorites;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
}
</script>

<style scoped>


h1 {
  font-family: "Acme", sans-serif;
  display: inline;
  color: black;
  font-size: 3.5rem;
}
.fa-fire {
  color: rgb(237, 93, 77);
}
.logo {
  padding-left: 50px;
  padding-top: 25px;
}
h2 {
  font-family: "Acme", sans-serif;
  font-size: 2rem;
  margin-left: 50px;
  margin-top: 25px;
}

table {
  width: 100%;
  font-family: "Roboto";
  text-align: center;
  border-collapse: collapse;
}

.picture-and-name {
  width: 20vw;
  height: 20vh;
}

.restaurant-name {
  background: rgba(255, 255, 255, 0.694);
  border-radius: 5px;
  position: absolute;
  width: 18vw;
  left: 0.8vw;
}

.restaurant-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 3px solid black;
}

#labels {
  background-color: rgb(233, 233, 233);
  font-size: 1.5rem;
}

tr:nth-child(even) {
  background-color: rgb(233, 233, 233);
}

.fa-times-circle {
  color: rgb(237, 93, 77);
}
</style>
