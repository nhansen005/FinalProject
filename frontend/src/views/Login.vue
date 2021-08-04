<template>
  <div id="login" class="text-center">
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Yinz Gotta Sign In</h1>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="invalidCredentials"
      >Quit jaggin off! Invalid username and password!</div>
      <div
        class="alert alert-success"
        role="alert"
        v-if="this.$route.query.registration"
      >Thank Yinz for registering, please sign in.</div>
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
      <router-link :to="{ name: 'register' }">Yinz need an account?</router-link>
      <button type="submit">Sign in</button>
    </form>

    

    
    <section class="section">
			<div class="container">
				<div class="columns">
					<div class="column">
            <div class ="notification is-info">
						R Yinz Hungry?!
            <p>
              ᕕ( ᐛ )ᕗ
            </p> 
            </div>
					</div>
					<div class="column">
            <div class ="notification is-warning">
					<p>Can't find the PERFECT spot to eat?! </p>	
            <p> ⦤(^ー^)⦥ </p>

          </div>
					</div>
					<div class="column">
            <div class ="notification is-primary">
								Restaurant-Tinder™ TIME! 
                <p>٩(^ᴗ^)۶</p>
              </div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
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
    }
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
.left-div {
    background-image: url("/java-final-capstone-team-6/frontend/public/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg");
    height: 100vh;
    background-size: cover;
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
