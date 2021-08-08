<template>

  <div id='tinders'>
  <h1>Yinz Hungry ?</h1>


    <b-container class="search">
      <b-row align-h="start">
        <b-col align-self="start" class="justify-content-start" lg="4">
          <label for="category">Restaurant Name/Category:</label>
          <b-form-input
            type="text"
            id="category"
            v-model="category"
            placeholder="Search Categories eg: Pizza or Deli"
          />
        </b-col>
      </b-row>
      <b-row align-h="start">
        <b-col align-self="start" class="justify-content-start" lg="4">
          <label for="zipCode">Enter Zip Code:</label>
          <b-form-input
            type="text"
            id="zipCode"
            v-model="zipCode"
            placeholder="Zip Code"
          />
        </b-col>
      </b-row>
      <b-row align-h="start">
        <b-col align-self="start" class="justify-content-start" lg="4">
          <label for="input-range">
            Searching Range in Meters: {{ this.radius}} </label
          >
          <b-form-input
            type="range"
            max="40000"
            min="10000"
            step="5000"
            id="input-range"
            v-model="radius"
            placeholder="Search Restaurant"
          />
        </b-col>
      </b-row>
      <b-row align-h="start">
        <button @click="search()">Search</button>
      </b-row>
    </b-container>

    <div></div>

    <b-table
      striped
      fluid
      hover
      :fields='fields'
      :items="restaurants"
      v-if="restaurants.length > 0"
    >
      <template v-slot:cell(name)="data">
       <b-link :href="data.item.url" target='_blank'> {{ data.item.name }}</b-link>
      </template>

      <template v-slot:cell(categories)="data">
        {{ data.item.categories[0].title }}
      </template>

      <template v-slot:cell(location)="data">
        {{ data.item.location.display_address[0] }},
        {{ data.item.location.display_address[1] }}
      
      </template>
      

      <template v-slot:cell(tindies)="data">
        <img :src="data.item.image_url" alt=""  class="img-thumbnail" />
      </template>
      <template v-slot:cell(telephone)="data">
         {{ data.item.display_phone }} 
       
      </template>


    </b-table>

    <div v-else>There's no any restaurant in list now.</div>
  </div>
  
</template>
 
<script>
import tinderService from "../services/TinderService";
export default {
  name: "business-summary",
  data() {
    return {
      restaurants: [],
      zipCode: "",
      category: "",
      meter:'',
     
      radius: 10000,
      fields: [
        { key: "name", sortable: false },
        { key: "tindies", sortable: false },
        { key: "categories", sortable: true },
        { key: "rating", sortable: true },
        { key: "location", sortable: false },
        { key: "telephone", sortable: false },
      ],
    };
  },
  watch:{
    mile: function(value){
      this.mile=value;
      this.meter=value * 1,609.344;
    },

    meters: function(value) {
        this.mile = value / 1,609.344;
        this.meter = value;
    }

  },
  created() {
    tinderService.getRestaurantsNoRadius().then((response) => {
      if (response.status == 200) {
        this.restaurants = response.data;
        console.log("Here is the response", response.data);
      } else {
        console.log("Yinz couldnt pull nothing");
      }
    });
  },
  methods: {


    search() {
      if (this.category != "") {
      console.log("ran");
      tinderService
        .getRestaurantsWithRadius(this.zipCode, this.category, this.radius)
        .then((response) => {
          if (response.status == 200) {
            this.restaurants = response.data;
            this.category = "";
            this.zipCode = "";
            console.log("Here is the response", response.data);
          } })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Nebby Debby Says ---> 'Search Bar Is Empty Jagoff'");
      }
    },
  },

  computed: {
    
    mToMiles(radius){
      return radius.meter;
      //Need to add method to autoCompute 
      //the km to miles on the radius, and dynamically 
      //update the output to the user
      //Empty for now to avoid Compile Errors

    },


  }

};
</script>

<style scoped>

body {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    min-width: 100%;
    margin: 0;
    padding: 0;
    
}
.tinders{
  background-color: yellow;

}
.left-div {
    background-image: url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80");
    height: 100vh;
    background-size: cover;
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
.logo {
    padding-left: 50px;
    padding-top: 25px;
}
.right-div {
  align-items: center;
}
h2 {
    font-family: 'Acme', sans-serif;
    font-size: 2rem;
    margin-left: 25px;
    margin-top: 200px;
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
#email {
    margin-left: 25px;
    font-size: 1.33rem;
    padding:0.5em 3em;
    border: 0.05em solid gray;
    border-radius: 6px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}

  .btns{
    display: flex;
    align-content: center;
      
    }
#login {
    display: block;
    text-align: right;
    color: rgb(237, 93, 77);
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    margin-top: 15px;
    margin-right: 20px;
}
#login:hover {
    text-decoration: underline;
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
