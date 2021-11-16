<template>
  <v-container>
    <!-- Read recently -->
    <v-row v-if="isLogged">
      <v-col cols="12">
        <home-displayer :products="userReadBooks" type="Read Recently"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet color="info" rounded>
          <v-text h1>Recommended for you</v-text>
        </v-sheet>
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
  import homeDisplayer from "..\\components\\homeDisplayer.vue"
  import { mapGetters } from "vuex";
  export default {
    name: 'Home',
    components: {
      homeDisplayer
    },
    data() {
      return {
        products : this.$store.state.products,
      }
    },
    computed: {
      ...mapGetters(["isLogged", "user", "userReadBooks"])
    },
  }
</script>
