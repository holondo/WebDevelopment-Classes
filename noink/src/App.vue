<template>
  <v-app id="inspire">
    <top-bar/>
    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  export default {
    name : "App",
    components : {
      TopBar
    },
    data: () => ({
      user : null
    }),
    created(){
    }
  }
</script>