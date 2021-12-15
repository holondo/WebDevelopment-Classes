<template>
    <v-container>
        <v-row >
          <h2 class="text-center">Change Banner</h2>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-3">
                <v-text-field v-model="link" outlined label="Link to product" ></v-text-field>
                <v-text-field v-model="title" outlined label="Headline" ></v-text-field>
                <v-text-field v-model="subtitle" outlined label="Subtitle" ></v-text-field>
              <v-row>
                <v-text-field v-model="link" outlined label="Link" placeholder="http://" class="mx-3"></v-text-field>
                <v-text-field v-model="img" outlined placeholder="Image URL" prepend-icon="mdi-camera" class="mr-3"></v-text-field>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6">
            Banner's Colour:{{color.hex}}
            <v-card class="pa-3 d-flex justify-center">
              <v-color-picker v-model="color" flat/>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" class="d-flex justify-center">
            <v-btn @click.prevent="save" color="success">Change Banner</v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
  export default{
    name: 'BannerForm',
    data() {
      return {
        color: {},
        title: "",
        subtitle: "",
        img: "",
        link: ""
      }
    },

    methods: {
      async save(){
        let newBanner = {
          title: this.title,
          subtitle: this.subtitle,
          img: this.img,
          link: this.link,
          color: this.color.hex,
        }

        let resp = await fetch("http://localhost:3000/banner", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newBanner)
        })
        if(resp.status === 201){
          window.alert("Changed")
          this.$router.push({name: "Home"})
        }
      }
    },

  }
</script>
