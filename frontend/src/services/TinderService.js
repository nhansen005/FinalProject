//import axios from 'axios';

//const http = axios.create({
    baseURL: "http://localhost:3000"
//});

//export default {
  //  getRestaurant(){
    //    return http.get('https://api.yelp.com/v3/businesses/search/search?location=16214&key=77aoP1HiL4fRMtI5LCEFAJGqYFnW6DYaYAvjpX74mHmANH0KgoSaeHEYkXKAWUrrmpuzMNgWmQnL00dE_XQKZ2ep2pEV0jkWTlmnnkNPYKU7Nvt-rXvATN-zRpEJYXYx');
    //}

 
        
    //}


    import axios from 'axios';

export default {

  getRestaurantsNoRadius(zipCode, category) {
    return axios.get(`/businesses`, {
      headers : {
        'zipCode': zipCode,
        'category': category,
        'radius': ''
      }
    })
  },
  getRestaurantsWithRadius(zipCode, category, radius) {
    return axios.get(`/businesses`, {
      headers : {
        'zipCode': zipCode,
        'category': category,
        'radius': radius
      }
    })
  },
  getBusinessByID(businessID) {
    return axios.get(`/businesses/${businessID}`)
  },
  getReviews(businessID) {
    return axios.get(`/reviews/${businessID}`)
  },
  addFavorites(businessID) {
    return axios.post(`/favorites/${businessID}`)
  },
  getFavorites(){
    return axios.get('/favorites')
  },
  deleteFavorites(businessID) {
    return axios.delete(`/favorites/${businessID}`)
  }
}