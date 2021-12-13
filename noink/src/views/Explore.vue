<template>
  <v-container color="warning">
    <h2>Products</h2>
    {{this.$store.state.search}}
    <v-row>
      <v-col
      sm="6"
      md="4"
      lg="2"
      v-for="product in filter" :key="product">
        <product-card :product="product"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import productCard from '../components/productCard.vue'
  export default{
    name: "Explore",
    data() {
      return {
        products: []
      }
    },
    methods: {
      async getProducts(){
        let resp = await fetch("http://localhost:3000/products/")
        this.products = await resp.json()
      }
    },
    created() {
      this.getProducts()
    },
    components:{
      productCard
    },
    computed: {
      filter(){
         return this.products.filter((f) => 
         f.name.toLowerCase().includes(this.$store.state.search.toLowerCase() || ""))
        } 
    }
  }
</script>
