<template>
<div>
    <h1> chicken tinder </h1><i class="fas fa-fire fa-3x"></i>
    <!-- <input type="text" v-model="zipCode">
    <input type="text" v-model="category"> -->
    <!-- <button v-on:click="search"> Submit </button> -->
    <div class="restaurant-card" v-on:click="viewRestaurantDetails" v-show="!showDetails">
        <div class="restaurant-info">
            <h2 class="restaurant-name">{{ restaurants[0].name }}</h2>
            <br>
            <ul v-for="category in restaurants[0].categories" :key="category.title"><li class="categories">{{ category.title }} </li></ul>
            <br>
            <span class="average-rating"> Average rating: {{ restaurants[0].rating }}/5 ({{ restaurants[0].review_count  }} reviews)</span>

            <p v-if="restaurants[0].price != null" class="restaurant-price"> {{restaurants[0].price}}</p>
            <br>
        </div>
        <img class="restaurant-pic" :src="restaurants[0].image_url" alt="Image not available">
    </div>

    <div class="like" v-on:click="like"><i class="fas fa-heart fa-5x"></i></div>
    <div class="dislike" v-on:click="dislike"><i class="fas fa-times-circle fa-5x"></i></div>
    
    <div class="restaurant-details" v-show="showDetails">
          <div class="restaurant-info restaurant-detailed-info">
            <h2 class="restaurant-name">{{ restaurants[0].name }}</h2>
            <br>
            <ul v-for="category in restaurants[0].categories" :key="category.title"><li class="categories">{{ category.title }} </li></ul>
            <br>
            <span class="average-rating"> Average rating: {{ restaurants[0].rating }}/5 ({{ restaurants[0].review_count  }} reviews)</span>
            <p v-if="restaurants[0].price != null" class="restaurant-price"> {{restaurants[0].price}}</p>
            <p class="location">{{ restaurants[0].name }} is located at {{ restaurants[0].location.display_address[0] }}, {{ restaurants[0].location.display_address[1] }}. Their phone number is {{ restaurants[0].display_phone }}.</p>
            <br>
        </div>
        <img class="restaurant-pic" :src="restaurants[0].image_url" alt="Image not available">
    </div>

    </div>
</template>
<script>
import tinderService from '../services/TinderService';
export default {
  name: "home",
  data() {
      return {
      restaurants: [],
      zipCode: this.$store.state.user.zipcode,
      category: "",
      showDetails: false,
      currentRestaurant: {},
      };
  },
  created() {
    tinderService.getRestaurantsNoRadius(this.$store.state.user.zipcode, "").then(response => {
      this.restaurants = response.data;
      console.log("Here is the response", response.data)
    });
  },
  methods: {
      search() {
        console.log("ran");
        tinderService.getRestaurantsWithRadius(this.$store.state.user.zipcode, this.category, 40000).then(response => {
          this.restaurants = response.data;
          console.log("Here is the response", response.data)
        });
      },
      like() {
        console.log("Okay at least this part works");
        tinderService.addFavorites(this.restaurants[0].id);
        this.restaurants.shift(this.restaurants[0]); 
      },
      dislike() {
        this.restaurants.shift(this.restaurants[0]);  
      },
      viewRestaurantDetails() {
        this.showDetails = true;
        tinderService.getBusinessByID(this.restaurants[0].id).then(response => {
            this.currentRestaurant = response.data;
        }); 
      }
  }
};
</script>

<style scoped>

body {
    min-width: 100%;
    margin: 0;
    padding: 0;
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

.restaurant-detailed-info {
    background-color: rgba(255, 235, 239, 0.591);
    margin: 0 auto;
    padding: 0;
    width: 50vw;
    height: 75vh;
}

.location {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(247, 154, 244, 0.7);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
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
    display: inline;
    background: rgba(198, 242, 244, 0.7);
    padding: 5px;
    border-radius: 10px;
    transition: .5s;
}

.categories:hover {
    background: rgba(198, 242, 244, 0.8);
    transition: .5s;
}
.restaurant-name {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    margin-left: 40px;
    background: rgba(237, 144, 134, 0.7);
    padding: 5px;
    border-radius: 10px;
    display: inline-block;
    transition: .5s;
}

.restaurant-name:hover {
    background: rgba(237, 144, 134, 0.8);
    transition: .5s;
}

.average-rating {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(247, 228, 154, 0.7);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
    transition: .5s;
}

.average-rating:hover {
    background: rgba(247, 228, 154, 0.8);
    transition: .5s;
}

.restaurant-price {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(154, 247, 157, 0.7);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
}

.restaurant-info {
    position: absolute;
}

  .btns{
    display: flex;
    align-content: center;
      
    }

@media only screen and (max-width: 1400px){
}
    </style>