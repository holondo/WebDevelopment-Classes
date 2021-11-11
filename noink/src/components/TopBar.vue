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
        <v-tab>
          <router-link :to="{name: 'Home'}" style="text-decoration: none; color: inherit;">Home</router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name: 'Explore'}" style="text-decoration: none; color: inherit;">Explore</router-link>
        </v-tab>
      </v-tabs>

      <v-text-field
            v-model="message2"
            outlined
            label="Search"
            rounded
            clearable
            append-icon="mdi-magnify"
            class="my-auto mr-3"
      ></v-text-field>

      <v-btn text to="profile" v-if="isLogged">
        <span >{{userName}}</span>
        <v-avatar
          color="grey darken-1 shrink"
          size="32"
          right
        ></v-avatar>
      </v-btn>
      <v-btn outlined to="login" v-else>
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
            }
        }
    })
</script>
