<template>
  <div
    style="
      background-image: 'public/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg';
    "
  >
    <h2 style="text-align: center">The team behind Chicken Tinder:</h2>
    <table>
      <tbody>
     
          <td>
                 <tr>
            <div id="noel">
              <h3>
                <a
                  href="https://www.linkedin.com/in/noel-hansen/"
                  target="_blank"
                  >Noel Hansen
                </a>
              </h3>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEE9uTR-2RMdQ/profile-displayphoto-shrink_200_200/0/1623091511506?e=1634169600&v=beta&t=wWd45iawZI_lpLvUv7cK5KhNVlnjYB8Id1I4uaUGI0c"
              />
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">The Major Key Alert</p>
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">...And Another One</p>
            </div>
         
        </tr>
         </td>
        <td>
          <tr>
            <div id="eric">
              <h3>
                <a
                  href="https://www.linkedin.com/in/erickrouse/"
                  target="_blank"
                  >Eric Krouse
                </a>
              </h3>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQG3JCkon-7sPg/profile-displayphoto-shrink_200_200/0/1626566734510?e=1634169600&v=beta&t=xXQe3UT49xkNK5yGSGVrhqz7By93lM_7E4Sf1EJg5Bk"
              />
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">Silky</p>
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">The Wizard of Krouse</p>
            </div>
          </tr>
        </td>
        <td>
          <tr>
            <div id="dj">
              <h3>
                <a
                  href="https://www.linkedin.com/in/ayodeji-akinbode-a5276020b/"
                  target="_blank"
                  >DJ Akinbode
                </a>
              </h3>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGbNmmLfewi6Q/profile-displayphoto-shrink_200_200/0/1623618805103?e=1634169600&v=beta&t=8QTSfIuuHsGYsQvoexnHCIn4kRCgQGyVvVqSl4tQ3CM"
              />
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">That's My DJ</p>
             <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">Mr. Smooth</p>
            </div>
          </tr>
        </td>
        
          <td>
              <tr>
            <div id="robert">
              <h3>
                <a
                  href="https://www.linkedin.com/in//mrobertmarks/"
                  target="_blank"
                  >M.Robert Marks
                </a>
              </h3>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEPvkm8gJb0Ng/profile-displayphoto-shrink_200_200/0/1516968207553?e=1634169600&v=beta&t=fvtCOBlwmlhWlPyzLiw6LS_IUyb53YInxl-EOMmvGX8"
              />
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">The Carnival Kid</p>
              <p style="font-weight: bold">A.K.A.</p>
             <p style="font-size: 16px">Mr. International</p>
            </div>
          
        </tr>
        </td>
        
          <td>
              <tr>
            <div id="sasan">
              <h3>
                <a
                  href="https://www.linkedin.com/in//sasan1200/"
                  target="_blank"
                  >Sasan Sotoodehfar
                </a>
              </h3>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHN6HX1unxMJg/profile-displayphoto-shrink_200_200/0/1626046921440?e=1634169600&v=beta&t=wsJXy2mHNiwEKgqFzlKO6cnXz9YAuRzSAlUDRDbDLFs"
              />
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">Sonny</p>
              <p style="font-weight: bold">A.K.A.</p>
              <p style="font-size: 16px">Abstract Method Guy</p>
            </div>
         
        </tr>
         </td>
      </tbody>
    </table>

    <div style="text-align: center; margin-top: 100px">
      <router-link v-bind:to="{ name: 'careers' }">Careers</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
h1 {
  text-align: center;
}

#noel {
  font-family: monospace;
  color: blue;
  text-align: center;
}
#eric {
  font-family: monospace;
  color: red;
  text-align: center;
}

#dj {
  font-family: monospace;
  color: rgb(141, 10, 141);
  text-align: center;
}

#robert {
  font-family: monospace;
  color: rgb(2, 75, 2);
  text-align: center;
}
#sasan {
  font-family: monospace;
  color: rgb(10, 58, 66);
  text-align: center;
}
</style>