import axios from 'axios';

export default {
    getRestaurant(){
        return axios.get('https://api.yelp.com/v3/businesses/search/key=77aoP1HiL4fRMtI5LCEFAJGqYFnW6DYaYAvjpX74mHmANH0KgoSaeHEYkXKAWUrrmpuzMNgWmQnL00dE_XQKZ2ep2pEV0jkWTlmnnkNPYKU7Nvt-rXvATN-zRpEJYXYx');
    }

 
        
    }
