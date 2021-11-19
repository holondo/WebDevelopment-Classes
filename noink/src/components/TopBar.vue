<template>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-app-bar-title>NoInK</v-app-bar-title>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab :to="{name: 'Home'}">
          <v-icon left>mdi-home</v-icon>
          <router-link :to="{name: 'Home'}" style="text-decoration: none; color: inherit;">Home</router-link>
        </v-tab>
        <v-tab :to="{name: 'Explore'}">
          <v-icon left>mdi-view-week</v-icon>
          <router-link :to="{name: 'Explore'}" style="text-decoration: none; color: inherit;">Explore</router-link>
        </v-tab>
      </v-tabs>

      <v-text-field
            v-model="$store.state.search"
            outlined
            label="Search"
            rounded
            clearable
            append-icon="mdi-magnify"
            class="my-auto mr-3"
            @click="$router.push({name: 'Explore'})"
      ></v-text-field>

      <v-btn icon v-if="isLogged" :to="{name: 'Cart'}">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn text :to="{name: 'Profile'}" v-if="isLogged">
        <span >{{userName}}</span>
        <v-avatar
          color="grey darken-1 shrink"
          size="32"
          right
        >
          <v-img :src="$store.getters.user.avatar"></v-img>
        </v-avatar>
      </v-btn>
      
      <v-btn outlined :to="{name: 'Login'}" v-else>
          Login
      </v-btn>
    </v-app-bar>
</template>

<script>
    export default({
        name : "TopBar",
        computed: {
            isLogged(){
                return this.$store.getters.isLogged
            },
            userName(){
              if(this.$store.getters.isLogged){
                let user = this.$store.getters.user
                return user.name
              }
              else{
                return "Username"
              }
            },
        },
        data: () => {
              return {
                search: ""
              }
            },
    })
</script>
