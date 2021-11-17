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
    components:{
      productCard
    },
    computed: {
      filter(){
         return this.$store.state.products.filter((f) => 
         f.name.toLowerCase().includes(this.$store.state.search.toLowerCase() || ""))
        } 
    }
  }
</script>
