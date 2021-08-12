<template>
  <div class="legal">

   <to-s />
  </div>
</template>

<script>
import ToS from '../components/ToS.vue';
export default {
  components: { ToS },
  name: "legal",

  methods: {
    yinz() {
      let text = "Yinz guys are totally f**^%ked. For real though. ";
      for (let i = 1; i < 2000; i++) {
        return text[i];
      }
    },
  },
};
</script>



<style>
.pop {
  text-anchor: start;
  font-weight: bolder;
  font-family: "Acme", sans-serif;
}
.legal {
  background-image: "https://media2.giphy.com/media/sJs1Ag97x0MV2/200.gif";
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

h3 {
  font-family: "Acme", sans-serif;
}


.fa-fire {
  color: rgb(237, 93, 77);
}
.logo {
  padding-left: 50px;
  padding-top: 25px;
}

h2 {
  font-family: "Acme", sans-serif;
  font-size: 2rem;
  margin-top: 200px;
}
button {
  display: inline-block;
  margin: 25px;
  padding: 0.8rem 8.3rem;
  border: 0.16em solid rgb(237, 93, 77);
  border-radius: 6px;
  background-color: rgb(237, 93, 77);
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  text-align: center;
  transition: all 0.15s;
}
button:hover {
  background-color: rgb(211, 82, 67);
  border-color: rgb(211, 82, 67);
}

@media only screen and (max-width: 1400px) {
  button {
    margin: 25px;
    padding: 0.8rem 8.3rem;
  }
}
@media only screen and (max-width: 881px) {
  .left-div {
    width: 100vw;
  }

  h1 {
    max-width: 100vw;
    font-size: 2rem;
  }

  .fa-fire {
    font-size: 2rem;
  }

  .landing-page {
    grid-template-columns: 1fr;
  }
  .logo {
    margin-top: 40px;
    position: absolute;
  }

  h2 {
    margin-top: 20px;
  }
}
</style>
