<template>
    <v-container>
        <v-row >
          <h2 class="text-center">Change Banner</h2>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-3">
              <v-text-field outlined label="Product Name"></v-text-field>
                <v-text-field outlined label="Headline" ></v-text-field>
                <v-text-field outlined label="Subtitle" ></v-text-field>
              <v-row>
                <v-text-field outlined label="Link" placeholder="http://" class="mx-3"></v-text-field>
                <v-text-field outlined placeholder="Image URL" prepend-icon="mdi-camera" class="mr-3"></v-text-field>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6">
            Banner's Colour:
            <v-card class="pa-3 d-flex justify-center">
              <v-color-picker flat/>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" class="d-flex justify-center">
            <v-btn color="success">Change Banner</v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
  export default{
    name: 'BannerForm',

  }
</script>
