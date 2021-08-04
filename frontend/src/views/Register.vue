<template>
  <div id="register" class="text-center">
    <form class="form-register" @submit.prevent="register">
      <h1 class="h3 mb-3 font-weight-normal">Create Account</h1>
      <div class="alert alert-danger" role="alert" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </div>
      <label for="username" class="sr-only">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        required
        autofocus
      />
      <label for="password" class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <input
        type="password"
        id="confirmPassword"
        class="form-control"
        placeholder="Confirm Password"
        v-model="user.confirmPassword"
        required
      />
      <form action="submit">
        <input type="text" name="name" id="name" placeholder="Full Name" required>
        <input type="email" name="email" id="emailaddress" placeholder="Email Address" required>
        <input type="number" name="phone" id="phone-number" placeholder="Phone Number">
        <input type="password" name="password" id="password" placeholder="Password" required>
        <input type="password" name="password" id="confirm-password" placeholder="Password" required>
        <input type="text" name="address" id="address1" placeholder="Street Address">
        <input type="text" name="address" id="address2" placeholder="Street Address 2">
        <input type="text" name="city" id="city" placeholder="City">
        <input type="text" name="state" id="state" placeholder="State/Province">
        <input type="number" name="zipcode" id="zipcode" placeholder="Zip Code" required>
        <input type="text" name="country" id="Country" placeholder="Country">
        <button action="submit">Register</button>
    </form>
      <router-link :to="{ name: 'login' }">Yinz have an account?</router-link>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Create Account
      </button>
      
    </form>
  </div>
</template>

<script>
import authService from '../services/AuthService';
import tinderService from '../services/TinderService';

export default {
  name: 'register',
  data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
      spot: []
    };
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: '/login',
                query: { registration: 'success' },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = 'Bad Request: Validation Errors';
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = 'There were problems registering this user.';
    },

    getRestaurant() {
      tinderService.getRestaurant().then( (response) => {
        if (response.status === 200) {
          this.spot = response.data.results;
          console.log(this.spot);
        }
      })
    }
  },
};
</script>

<style></style>
