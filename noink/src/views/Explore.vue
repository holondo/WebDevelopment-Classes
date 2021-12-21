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
        <v-btn v-if="$store.getters.isAdmin" small @click="del(product)" color="error" fab outlined class="my-2"> <v-icon>mdi-close-box</v-icon> </v-btn>
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
      },
      async del(product){
        let resp = await fetch("http://localhost:3000/products/"+product._id, {
          method: "DELETE"
        })
        if(resp.status === 200){
          let index = this.products.indexOf(product)
          if (index > -1) {
            this.products.splice(index, 1);
          }
          window.alert(index)
        }
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
