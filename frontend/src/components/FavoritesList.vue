<template>
<div>
     <h2>{{ this.$store.state.user.username }} 's favorites</h2>

<table
  >
    <thead>
      <tr id="labels">
        <th>Restaurant Name</th>
        <th>Categories</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Delete</th>
      </tr>
    </thead>
  
    <tbody>
      <tr v-for="restaurant in restaurants" v-bind:key="restaurant.id">
        
        <td class="picture-and-name">
            <div class="restaurant-name">
                <h3 class="restaurant-name">{{ restaurant.name }}</h3>
            </div>
            <img class="restaurant-pic" :src="restaurant.image_url" alt="No image provided">
        </td>
        <td><p v-for="category in restaurant.categories" :key="category.title">{{category.title}}</p></td>
        <td><a :href="`tel:${restaurant.display_phone}`">{{restaurant.display_phone }}</a></td>
        <td>{{restaurant.location.display_address[0]}}, {{restaurant.location.display_address[1] }}</td>
        <td><div v-on:click="removeFavorites(restaurant.id)"><i class="fas fa-times-circle fa-3x"></i></div></td>
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
import tinderService from '../services/TinderService'
export default {
    name:"favorites-list",
   
    data() {

         return {
    
      restaurants: [],
    };
  },
  beforeCreate() {
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
      this.restaurants.shift(this.restaurants[0]);
      tinderService.deleteFavorites(this.restaurants[0].id);
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