<template>
  <v-app
  id="HomeView"
  :style="{background: $vuetify.theme.themes.dark.background}"
  >
  <NavBar/>
  <v-container fluid>
    <!-- INTRO -->
    <div class="first" style="padding-top :7%">

      <h4 class="red--text">Hello Im Rimbadi</h4>
      <h1 class="white--text">Web Developer</h1>
      <p class="grey--text"> 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Adipisci explicabo, cupiditate necessitatibus iure hic omnis est ab
            <br />
            At nihil et temporibus ratione!
      </p>
      <v-btn tile color="#A7121D"> About Me </v-btn>
    </div>
      <!-- INTRO -->


      <!-- About -->
      <div class="first" id="about">
        <v-icon left></v-icon>
      </div>
      <!-- About -->

      <!-- SKILL -->
      <v-row>
        
        <v-col cols="12" class="padd">
          <div class="first" id="skill">
            <h1 class="white--text">SKILL</h1>
            <v-col cols="12">
          <div class="child" id="java">
            <v-icon color="#A7121D" x-large class="ml-3">mdi-language-java</v-icon>
            <h1 class="white--text">Java</h1>
          </div>
          <div class="child" id="sql">
            <v-icon color="#A7121D" x-large class="ml-3">mdi-database-search</v-icon>
            <h1 class="white--text">sql</h1>
          </div>
          <div class="child" id="vue">
            <v-icon color="#A7121D" x-large class="ml-3">mdi-vuejs</v-icon>
            <h1 class="white--text">Vuejs</h1>
          </div>
          <div class="child" id="bootsratp">
            <v-icon color="#A7121D" x-large class="ml-3">mdi-leaf</v-icon>
            <h1 class="white--text">Spring Boot</h1>
          </div>
            </v-col>
          </div>
        </v-col>
        
      </v-row>
      <!-- SKILL -->

      <!-- PROJECT -->
      <v-row>
        <v-col cols="12" class="padd">
          <div class="first" id="project">
            <h1 class="white--text">Projects</h1>
            <v-col cols="12">
              <div id="ecommerce" class="child">
                <v-icon color="#A7121D" x-large class="ml-3">mdi-cart-variant</v-icon>
                <h3 class="white--text">E-Commerce</h3>
                <p class="white--text">Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                    elit.
                </p>
                  <v-btn color="#A7121D"> Know More
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
              </div>
              <div id="webprofile" class="child">
                <v-icon color="#A7121D" x-large class="ml-3">mdi-application-outline</v-icon>
                <h3 class="white--text">Web Profile</h3>
                <p class="white--text">ipsum dolor sit amet <br />consectetur adipisicing
                    elit.</p>
                    <v-btn color="red"> Know More
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
              </div>
              <div id="mobileapp" class="child">
                <v-icon color="#A7121D" x-large class="ml-3">mdi-cellphone</v-icon>
                <h3 class="white--text">Android App</h3>
                <p class="white--text">ipsum dolor sit amet <br />consectetur adipisicing
                    elit.</p>
                    <v-btn color="red"> Know More
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
              </div>
            </v-col>
          </div>
        </v-col>
      </v-row>
      <!-- PROJECT -->


      
  </v-container>
  
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue';


  export default {
    name: 'Home',

    components: {
      NavBar,
    },
  }
</script>

<style>
.top{
  margin-top: 180px;
}
.topInverse{
  margin-top: -250px;
}
.topToolbar{
  margin-top: 100px;
  text-align: center;
}

.zero{
  padding-left: 25%;
  padding-right: 25%;
  padding-top: 30%;
}
.first{
  width: 100%;
  height: 610px;
  text-align: center;
  padding: 1%;
}

.second{
  width: 100%;
  height: 400px;
  text-align: center;
  padding: 2rem 2rem;
  margin-top: 250px;
}

.secondchild1{
display: inline-block;
padding: 2rem 1rem;
vertical-align: middle;
text-align: left;
margin-top: 250px;
}

.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 8px;
}

.child1{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
</style>
