<template>
  <v-app
  id="HomeView"
  :style="{background: $vuetify.theme.themes.light.background}"
  >
  <NavBar/>
  <v-container fluid>
    <!-- INTRO -->
    <div class="first" style="padding-left :30%; padding-right:30%;padding-top: 10%; text-align: left;">

      <h4 color="#111111">Hello I am Rimbadi</h4>
      <h1 color="#111111">Web Developer</h1>
      <p color="#111111"> 
        I really love creating an application and challenge my self to make things easier
      </p>
      <v-btn tile color="#A7121D"> My projects </v-btn>
    </div>
      <!-- INTRO -->


      <!-- SKILL -->
      <v-row>
        <v-col cols="12" class="padd">
          <div class="first" id="skill">
            <h1 class="#111111">Technology</h1>
            <v-col cols="12">
          <div class="child bgColor1" id="java">
            <v-icon color="#111111" x-large class="ml-3">mdi-language-java</v-icon>
            <h1 class="#111111">Java</h1>
          </div>
          <div class="child" id="sql">
            <v-icon color="#A7121D" x-large class="ml-3">mdi-database-search</v-icon>
            <h1 class="#111111">sql</h1>
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
      <h1 style="text-align: center; padding-bottom: 1%;">Projects</h1>
      <v-carousel
      cycle
      height="400px"
      hide-delimeter-background
      show-arrows-on-hover
      class="first"
      style="padding-left:20%; padding-right:20%"
      >
      <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      >Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="info"
        v-bind="attrs"
        v-on="on"
      >Next slide</v-btn>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <v-col cols="6">
          <div class="text-h2">
            {{ slide }}
          </div>
        </v-col>
        <v-col cols="6">
          <div class="black--text text-h4">{{ projectNames[i] }}</div>
          <div class="black--text text-h6">{{ projectDescription[i] }}</div>
          <div class="text-5px">{{ backEnd[i] }}</div>
          <v-btn> link </v-btn>
        </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    </v-carousel>   
  </v-container>
  <FooterBar/>
  </v-app>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavBar from '@/components/NavBar.vue';


  export default {
    name: 'Home',
    data: () =>({
      icons:["mdi-linkedin", "mdi-instagram"],
      slides:["Web App","Android App"],
      colors:['indigo','pink'],
      projectNames:["Portfolio",'Android App'],
      projectDescription:["this website using vueJS","this App using android studio with java"],
      backEnd:["Spring boot","laravel"]  
    }),

    components: {
    NavBar,
    FooterBar
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
.bgColor1 {
  background-color: #1e1e1e;
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
