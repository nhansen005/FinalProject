<template>
  <div class="swipe-page">


    <h3 v-on:click="displaySearch = !displaySearch">Custom search</h3>
    <div class="custom-search" v-show="displaySearch">
      <input
        type="text"
        id="category"
        v-model="category"
        placeholder="Cuisine Type"
      />
      <br />
      <input
        type="text"
        id="cust-location"
        v-model="customLocation"
        placeholder="Current Location"
      />
      <br />
      <label for="input-range"> Searching Range: {{ mile }} Miles </label>
      <br />
      <input
        type="range"
        max="40000"
        min="1609"
        step="3218"
        id="input-range"
        v-model="radius"
      />
      <br />
      <button id="search" v-on:click.prevent="search">Search</button>
    </div>

    <div
      class="restaurant-card"
      v-on:click="viewRestaurantDetails"
      v-show="!showDetails"
    >
      <div class="restaurant-info">
        <h2 class="restaurant-name">{{ restaurants[0].name }}</h2>
        <br />
        <ul v-for="category in restaurants[0].categories" :key="category.title">
          <li class="categories">{{ category.title }}</li>
        </ul>
      </div>
      <img
        class="restaurant-pic"
        :src="restaurants[0].image_url"
        alt="Image not available"
      />
    </div>

    <div class="like" v-on:click="like"><i class="fas fa-heart fa-5x"></i></div>
    <div class="dislike" v-on:click="dislike">
      <i class="fas fa-times-circle fa-5x"></i>
    </div>

    <div
      class="restaurant-details"
      v-on:click="viewRestaurantDetails"
      v-if="showDetails"
    >
      <div class="restaurant-info restaurant-detailed-info">
        <h2 class="restaurant-name">{{ restaurants[0].name }}</h2>
        <br />
        <ul v-for="category in restaurants[0].categories" :key="category.title">
          <li class="categories">{{ category.title }}</li>
        </ul>
        <br />
        <span class="average-rating">
          Average rating: {{ restaurants[0].rating }}/5 ({{
            restaurants[0].review_count
          }}
          reviews)</span
        >
        <p v-if="restaurants[0].price != null" class="restaurant-price">
          {{ restaurants[0].price }}
        </p>
        <p class="location">
          {{ restaurants[0].name }} is located at
          {{ restaurants[0].location.display_address[0] }},
          {{ restaurants[0].location.display_address[1] }}. Their phone number
          is {{ restaurants[0].display_phone }}.
        </p>
        <br />
        <p class="open" v-if="currentRestaurant.hours[0].is_open_now">
          Currently open
        </p>
        <p class="open" v-if="!currentRestaurant.hours[0].is_open_now">
          Currently closed
        </p>
      </div>
      <img
        class="restaurant-pic"
        :src="restaurants[0].image_url"
        alt="Image not available"
      />
    </div>

    <div class="show-details-div">
      <button
        class="show-details"
        v-show="!showDetails"
        v-on:click="viewRestaurantDetails"
      >
        Restaurant Details
      </button>
      <button
        class="show-details"
        v-show="showDetails"
        v-on:click="viewRestaurantDetails"
      >
        Hide Restaurant Details
      </button>
    </div>
  </div>
</template>

<script>
import tinderService from "../services/TinderService";
export default {
  name: "home",
  data() {
    return {
      restaurants: [],
      zipCode: this.$store.state.user.zipcode,
      customLocation: this.$store.state.user.zipcode,
      category: "",
      showDetails: false,
      currentRestaurant: {},
      mile: "5",
      radius: "8000",
      displaySearch: false,
    };
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode == 39) {
        this.like();
      }
      if (event.keyCode == 38) {
        this.viewRestaurantDetails();
      }
      if (event.keyCode == 37) {
        this.like();
      }
    });
  },
  created() {
    tinderService
      .getRestaurantsNoRadius(this.$store.state.user.zipcode, this.category)
      .then((response) => {
        if (response.status == 200) {
          this.restaurants = response.data;
          console.log("Here is the response", response.data);
        } else {
          console.log("Yinz couldnt pull nothing");
        }
      }),
      tinderService.getBusinessByID(this.restaurants[0].id).then((response) => {
        this.currentRestaurant = response.data;
      });
  },
  watch: {
    mile: function (val) {
      this.mile = val;
      this.radius = val * 1609;
    },
    radius: function (val) {
      (this.radius = val), (this.mile = val / 1609);
    },
  },
  methods: {
    search() {
      console.log("ran");
      tinderService
        .getRestaurantsWithRadius(
          this.customLocation,
          this.category.toLowerCase(),
          this.radius
        )
        .then((response) => {
          this.restaurants = response.data;
          console.log("Here is the response", response.data);
        });
    },
    like() {
      tinderService.addFavorites(this.restaurants[0].id);
      this.showDetails = false;
      this.restaurants.shift(this.restaurants[0]);
    },
    dislike() {
      this.showDetails = false;
      this.restaurants.shift(this.restaurants[0]);
      tinderService.deleteFavorites(this.restaurants[0].id);
    },
    viewRestaurantDetails() {
      this.showDetails = !this.showDetails;
      tinderService.getBusinessByID(this.restaurants[0].id).then((response) => {
        this.currentRestaurant = response.data;
      });
    },
  },
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
    left: 800px;
    top: 185px;
}

#cust-location, #category, #search {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
}

#cust-location {
    margin-top: 15px;
    margin-bottom: 15px;
   
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
    display: none;
}

.restaurant-name {
    max-width: 60vw;
    font-size: 1.5rem;
}

}
    </style>

