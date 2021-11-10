<template>
  <v-app id="inspire">
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
        <v-tab
          v-for="link in links"
          :key="link" :to="link[1]"
        >
          <router-link :to="link[1]" style="text-decoration: none; color: inherit;">{{ link[0]}}</router-link>
          
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

      <v-btn icon  to="profile">
        <v-avatar
          color="grey darken-1 shrink"
          size="32"
        ></v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        ['Home', '/', ],
        ['Explore', '/about']
      ],
    }),
  }
</script>