<template>
<div>
    <h1> chicken tinder </h1><i class="fas fa-fire fa-3x"></i>
    <!-- <input type="text" v-model="zipCode">
    <input type="text" v-model="category"> -->
    <!-- <button v-on:click="search"> Submit </button> -->
    <div class="restaurant-card">
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

    <button v-on:click="like">LIKE</button>
        <!-- <ul>
            <li v-for="item in restaurants" :key="item.id">
                {{ item.name }} ({{item.location.display_address[1]}})
                <img :src="item.image_url" alt="Image Not Available">
            </li>
        </ul> -->
    </div>
</template>
<script>
import tinderService from '../services/TinderService';
export default {
  name: "home",
  data() {
      return {
      restaurants: [],
      zipCode: this.$store.state.user.zipCode,
      category: ""
      };
  },
  created() {
    tinderService.getRestaurantsNoRadius().then(response => {
      this.restaurants = response.data;
      console.log("Here is the response", response.data)
    });
  },
  methods: {
      search() {
        console.log("ran");
        tinderService.getRestaurantsWithRadius(this.zipCode, this.category, 40000).then(response => {
          this.restaurants = response.data;
          console.log("Here is the response", response.data)
        });
      },
      like() {
        console.log("Okay at least this part works");
        this.$store.state.favorites.push(this.restaurants[0]);
        this.restaurants.shift(this.restaurants[0]); 
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

.restaurant-card {
    border: 5px solid black;
    margin: 0 auto;
    padding: 0;
    width: 75vw;
    height: 80vh;
}

.restaurant-pic {
    width: 100%;
    height: 100%
}

ul {
    display: inline;
}

.categories {
    font-family: 'Roboto', sans-serif;
    display: inline;
    background: rgba(198, 242, 244, 0.6);
    padding: 5px;
    border-radius: 10px;
}
.restaurant-name {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    margin-left: 40px;
    background: rgba(237, 144, 134, 0.6);
    padding: 5px;
    border-radius: 10px;
    display: inline-block;
}

.average-rating {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(247, 228, 154, 0.6);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
}

.restaurant-price {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    background: rgba(154, 247, 157, 0.6);
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 40px;
}

.restaurant-info {
    position: absolute;
}
button {
    display:inline-block;
    padding:0.5em 3em;
    border: 0.16em solid rgb(237, 93, 77);
    border-radius: 6px;
    background-color: rgb(237, 93, 77);
    margin:0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-decoration:none;
    text-transform:uppercase;
    font-family:'Roboto',sans-serif;
    font-size: 1.2rem;
    color:rgb(255, 255, 255);
    text-align:center;
    transition: all 0.15s;
}
button:hover {
    background-color:rgb(211, 82, 67);
    border-color: rgb(211, 82, 67);
}

  .btns{
    display: flex;
    align-content: center;
      
    }

@media only screen and (max-width: 1400px){
    button {
        display: block;
        margin: 25px;
        padding: 0.8rem 8.3rem;
    }
    #email {
        display: block;
        margin: 25px;
    }
}
@media only screen and (max-width: 881px) {
    body {
        grid-template-columns: 1fr;
    }
    .logo {
        margin-top: 40px;
        position: absolute;
    }
    #login {
        position: absolute;
        top: 5px;
        right: 2px;
    }
    h2 {
        margin-top: 20px;
    }

  
}

</style>
