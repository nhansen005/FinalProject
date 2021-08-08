<template>

<div class = "landing-page">
    <div class="left-div">
      <div class="logo">
        <h1>chicken tinder</h1>
        <i class="fas fa-fire fa-3x"></i>
        <div id="registration-form">
        <form class="form-signup" v-show="showRegistration && !showlogin" @submit.prevent="register">
          <h2 v-class="error-message" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </h2>
          <input type="text" name="name" id="firstname" placeholder="First Name" >
          <input type="text" name="name" id="lastname" placeholder="Last Name" >
          <input type="text" name="username" id="username" placeholder="Username" v-model="newUser.username" required>
          <input type="number" name="phone" id="phone-number" placeholder="Phone Number">
          <input type="password" name="password" id="enter-password" placeholder="Password" v-model="newUser.password" required>
          <input type="password" name="password" id="confirm-password" placeholder="Confirm Password" v-model="newUser.confirmPassword" required>
          <input type="text" name="address" id="address1" placeholder="Street Address">
          <input type="text" name="address" id="address2" placeholder="Street Address 2">
          <input type="text" name="city" id="city" placeholder="City">
          <input type="text" name="state" id="state" placeholder="State/Province">
          <input type="number" name="zipcode" id="zipcode" placeholder="Zip Code" v-model="newUser.zipcode" required>
          <input type="text" name="country" id="Country" placeholder="Country">
          <button action="submit" id="">Register</button>
        </form>
        </div>
      </div>
    </div>
    <div class="right-div">
        <a v-on:click="showlogin = ! showlogin" id="login" v-show="!showlogin">Sign in</a>
        <a v-on:click="showlogin = ! showlogin" id="registeroption" v-show="showlogin">Don't have an account? Sign up!</a>
        
        <form class="form-signin" @submit.prevent="login" v-show="showlogin">
          <input type="text" id="username" placeholder="username" v-model="existingUser.username">
          <input type="password" id="password" placeholder="password" v-model="existingUser.password">
          <button action="submit" type="submit" id="signin">Sign in</button>
        </form>

        <div class="register" v-show="!showlogin">
        <h2>Register to start swiping and find your perfect tasty match <i class="fas fa-fire"></i></h2>
        <button id="register" action="submit" v-show="! showRegistration" v-on:click="showRegistration = ! showRegistration">Register</button>
        </div>
    </div>
</div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      existingUser: {
        username: "",
        password: ""
      },
      invalidCredentials: false,
      newUser: {
        username: '',
        password: '',
        confirmPassword: '',
        zipcode: '',
        role: 'user',
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
      showlogin: false,
      showRegistration: false
    };
  },
  methods: {
    login() {
      authService
        .login(this.existingUser)
        .then(response => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch(error => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
    register() {
      if (this.newUser.password != this.newUser.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } else {
        authService
          .register(this.newUser)
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
  },
};
</script>

<style scoped>

.landing-page {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    min-width: 100%;
    margin: 0;
    padding: 0;
}
.left-div {
    background-image: url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    height: 100vh;
    background-size: cover;
}

.right-div {
  text-align: center;
}

.right-div > h2 {
  text-align: left;
}

.form-signin {
  margin-top: 100px;
}

.form-signin input {
    padding:0.5em 3em;
    margin:0 0.3em 0.3em 0;
    font-family:'Roboto',sans-serif;
    font-size: 1.2rem;
}

.form-signup {
  margin-top: 70px
}

.form-signup input {
    padding:0.3em 3em;
    margin:0 0.3em 0.3em 0;
    font-family:'Roboto',sans-serif;
    font-size: 1rem;
}

#registration-form {
  text-align: center;
}


h1 {
    font-family: 'Acme', sans-serif;
    display: inline;
    color: white;
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
    font-family: 'Acme', sans-serif;
    font-size: 2rem;
    margin-top: 200px;
}
button {
    display:inline-block;
    margin: 25px;
        padding: 0.8rem 8.3rem;
    border: 0.16em solid rgb(237, 93, 77);
    border-radius: 6px;
    background-color: rgb(237, 93, 77);
    
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
#login, #registeroption {
    display: block;
    text-align: right;
    color: rgb(237, 93, 77);
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    margin-top: 15px;
    margin-right: 20px;
}
#login:hover, #registeroption:hover {
    text-decoration: underline;
}
@media only screen and (max-width: 1400px){
    button {
        margin: 25px;
        padding: 0.8rem 8.3rem;
    }
}
@media only screen and (max-width: 881px) {
    .landing-page {
        grid-template-columns: 1fr;
    }
    .logo {
        margin-top: 40px;
        position: absolute;
    }
    #login, #registeroption {
        position: absolute;
        top: 5px;
        right: 2px;
    }
    h2 {
        margin-top: 20px;
    }

    .form-signin {
      position: absolute;
      top: 200px;
      right: 50px;
      left: 50px;
    }

    .form-signup {
      margin-top: 30px;
    }
}
</style>
