import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    restaurants: [
      {
          "id": "ydZCKUnuVavf2WQjVcReuQ",
          "alias": "clarion-river-brewing-company-clarion-2",
          "name": "Clarion River Brewing Company",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/y2_xzfGFbPo8qrHXL9vZ6w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/clarion-river-brewing-company-clarion-2?adjust_creative=zMg57U0NLUt1Fxl8QzP1oA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMg57U0NLUt1Fxl8QzP1oA",
          "review_count": 118,
          "categories": [
              {
                  "alias": "breweries",
                  "title": "Breweries"
              },
              {
                  "alias": "tradamerican",
                  "title": "American (Traditional)"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 41.21382,
              "longitude": -79.38395
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "600-604 Main St",
              "address2": "",
              "address3": "",
              "city": "Clarion",
              "zip_code": "16214",
              "country": "US",
              "state": "PA",
              "display_address": [
                  "600-604 Main St",
                  "Clarion, PA 16214"
              ]
          },
          "phone": "+18142978399",
          "display_phone": "(814) 297-8399",
          "distance": 513.6113959223417
      },
      {
          "id": "i-_D_cE-4yYnw_vqcDysyg",
          "alias": "michelles-cafe-clarion",
          "name": "Michelle's Cafe",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/mPgLHZnBlfk2eruaf6Dq1Q/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/michelles-cafe-clarion?adjust_creative=zMg57U0NLUt1Fxl8QzP1oA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMg57U0NLUt1Fxl8QzP1oA",
          "review_count": 41,
          "categories": [
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              },
              {
                  "alias": "gelato",
                  "title": "Gelato"
              },
              {
                  "alias": "bagels",
                  "title": "Bagels"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 41.21412,
              "longitude": -79.38348
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "611 Main St",
              "address2": "",
              "address3": "",
              "city": "Clarion",
              "zip_code": "16214",
              "country": "US",
              "state": "PA",
              "display_address": [
                  "611 Main St",
                  "Clarion, PA 16214"
              ]
          },
          "phone": "+18142272688",
          "display_phone": "(814) 227-2688",
          "distance": 508.5358561481873
      },
      {
          "id": "XOKNOHkrZ-CY-eqbyHNeGg",
          "alias": "bobs-sub-and-sandwich-shop-clarion",
          "name": "Bob's Sub & Sandwich Shop",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/stDPc5DUd9AtOSsiPrAJwg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/bobs-sub-and-sandwich-shop-clarion?adjust_creative=zMg57U0NLUt1Fxl8QzP1oA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMg57U0NLUt1Fxl8QzP1oA",
          "review_count": 46,
          "categories": [
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 41.2147333,
              "longitude": -79.3854169
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "501 Main St",
              "address2": "",
              "address3": "",
              "city": "Clarion",
              "zip_code": "16214",
              "country": "US",
              "state": "PA",
              "display_address": [
                  "501 Main St",
                  "Clarion, PA 16214"
              ]
          },
          "phone": "+18142267951",
          "display_phone": "(814) 226-7951",
          "distance": 669.8796234061449
      },
      {
          "id": "oJ0zQ0SXPPI8Nr7AdfF4dQ",
          "alias": "daddys-main-street-clarion",
          "name": "Daddy's Main Street",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ers2wzsCdGUuqIZEY2H8Gw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/daddys-main-street-clarion?adjust_creative=zMg57U0NLUt1Fxl8QzP1oA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMg57U0NLUt1Fxl8QzP1oA",
          "review_count": 45,
          "categories": [
              {
                  "alias": "hotdog",
                  "title": "Hot Dogs"
              },
              {
                  "alias": "burgers",
                  "title": "Burgers"
              },
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 41.2146874,
              "longitude": -79.3851139
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "513 Main St",
              "address2": null,
              "address3": null,
              "city": "Clarion",
              "zip_code": "16214",
              "country": "US",
              "state": "PA",
              "display_address": [
                  "513 Main St",
                  "Clarion, PA 16214"
              ]
          },
          "phone": "+18142234687",
          "display_phone": "(814) 223-4687",
          "distance": 640.712145463688
      },
      {
          "id": "0m3aJxppLm6fSGYjm_JUfQ",
          "alias": "pizza-pub-clarion",
          "name": "Pizza Pub",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/l07y-7l4EQ6Iv6V4CxJ6cg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/pizza-pub-clarion?adjust_creative=zMg57U0NLUt1Fxl8QzP1oA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zMg57U0NLUt1Fxl8QzP1oA",
          "review_count": 45,
          "categories": [
              {
                  "alias": "pizza",
                  "title": "Pizza"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 41.2081697,
              "longitude": -79.3672166
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "1306 E Main St",
              "address2": "",
              "address3": "",
              "city": "Clarion",
              "zip_code": "16214",
              "country": "US",
              "state": "PA",
              "display_address": [
                  "1306 E Main St",
                  "Clarion, PA 16214"
              ]
          },
          "phone": "+18142268721",
          "display_phone": "(814) 226-8721",
          "distance": 1073.7474972857206
      }
    ],
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    }
  }
})
