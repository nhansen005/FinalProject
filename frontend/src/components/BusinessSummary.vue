<template>
  <div id="tinders">
    <nav>
        <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'favorites' }">Liked Restaurants</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'logout' }">Logout</router-link>
    </nav>
    <div class="logo">
      <h1> chicken tinder </h1><i class="fas fa-fire fa-3x"></i>
    </div>
    <h2>Favorites</h2>
  
  <table
  >
    <thead>
      <tr>
        <th colspan="2">Restaurant Name</th>
        <th>Categories</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Delete</th>
      </tr>
    </thead>
  
    <tbody>
      <tr v-for="restaurant in restaurants" v-bind:key="restaurant.id">
        <td>{{restaurant.name }}</td>
        <td><img :src="restaurant.image_url" alt="No image provided"></td>
        <td><p v-for="category in restaurant.categories" :key="category.title">{{category.title}}</p></td>
        <td>{{restaurant.display_phone }}</td>
        <td>{{restaurant.location.display_address[0]}}, {{restaurant.location.display_address[1] }}</td>
        <td><div v-on:click="removeFavorites(restaurant.id)"><i class="fas fa-times-circle"></i></div></td>
      </tr>
    </tbody>

      <!-- <template v-slot:cell(name)="data">
        <b-link :href="data.item.url" target="_blank">
          {{ data.item.name }}</b-link
        >
      </template>

      <template v-slot:cell(categories)="data">
        {{ data.item.categories[0].title }}
      </template>

      <template v-slot:cell(location)="data">
        {{ data.item.location.display_address[0] }},
        {{ data.item.location.display_address[1] }}
      </template>

      <template v-slot:cell(tindies)="data">
        <img :src="data.item.image_url" alt="" class="img-thumbnail" />
      </template>
      <template v-slot:cell(telephone)="data">
        {{ data.item.display_phone }}
      </template> -->
    </table>
  </div>
</template>
 
<script>
import tinderService from "../services/TinderService";
export default {
  name: "business-summary",
  data() {
    return {
      restaurants: this.$store.state.favorites,
    };
  },
  beforeCreate() {
    // tinderService.getRestaurantsNoRadius().then((response) => {
    //   if (response.status == 200) {
    //     this.restaurants = response.data;
    //     console.log("Here is the response", response.data);
    //   } else {
    //     console.log("Yinz couldnt pull nothing");
    //   }
    // });
    tinderService
      .getFavorites()
      .then((response) => {
        if (response.status == 200) {
          this.$store.commit("MAKE_FAVORITES", response.data);
          console.log("Yee sonnnn you got dat list");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
      // this.restaurants = this.$store.state.favorites;
  
  },
  methods: {
    // listFavorites() {
    //   tinderService
    //     .getFavorites()
    //     .then((response) => {
    //       if (response.status == 200) {
    //         this.restaurants = response.data;
    //         console.log("Yee sonnnn you got dat list");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
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
  },
}
};
</script>

<style scoped>

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
  margin-left: 25px;
  margin-top: 200px;
}

</style>
