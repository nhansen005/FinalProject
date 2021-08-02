import axios from 'axios';

export default {
    getRestaurant(){
        return axios.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyBq9NXVRF2liVkMXvyQkYsNFJySWQnAT34');
    }
}