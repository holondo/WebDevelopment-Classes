<template>
  <v-container>
    <!-- Read recently -->
    <v-row v-if="isLogged">
      <v-col cols="12">
        <home-displayer :products="userBooks" type="Read Recently"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet :color="banner.color" rounded>
          <v-row justify="space-around">
            <v-col cols="6">
              <h1 class="my-20 text-center" style="font-family: 'Courier New'; font-size:60px">{{banner.title}}</h1>
              <p class="text-center">{{banner.subtitle}}</p>
            </v-col>
            <v-col cols="2">
              <v-img max-width="80px" :src="banner.img" class="elevation-3"/>
            </v-col>  
          </v-row>
        </v-sheet>
        <v-btn v-if="isAdmin" :to="{name: 'BannerForm'}">Change banner</v-btn>
      </v-col>
    </v-row>

    <!-- Products -->
    <v-row  v-for="row_number in Math.ceil(products.length / 6)" :key="row_number">
      <v-col cols="12">
        <home-displayer :products="products.slice((row_number-1)*6)" :type="'Category ' + row_number"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import homeDisplayer from "../components/homeDisplayer.vue"
  import { mapGetters } from "vuex";
  export default {
    name: 'Home',
    components: {
      homeDisplayer
    },
    data() {
      return {
        products : {},
        banner: {},
        userBooks:[]
      }
    },
    created() {
      this.getProducts()
      this.getBanner()
      this.getUserBooks()
    },
    methods: {
      async getProducts(){
        let resp = await fetch("http://localhost:3000/products/")
        this.products = await resp.json()
      },
      async getBanner(){
        this.banner = await this.currBanner
      },
      async getUserBooks(){
        if(this.isLogged){
          this.userBooks = await this.userReadBooks
        }

      }
    },
    computed: {
      ...mapGetters(["isLogged", "user", "isAdmin", "currBanner", "userReadBooks"])
    },
  }
</script>
