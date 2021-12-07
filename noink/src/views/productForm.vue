<template>
    <v-container>
        <v-row >
          <h2 class="text-center">New product</h2>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-3">
              <p>##{{[Pname, price, date, type]}}</p>
              <v-text-field outlined label="Product Name" v-model="Pname"></v-text-field>
              <v-row>
                <v-text-field v-model="price" label="Price" placeholder="99,99" prefix="$" class="mx-3"></v-text-field>
                <v-text-field v-model="date" outlined  type="date" class="mr-3" label="Publication date"></v-text-field>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="pa-3"> 
              <v-radio-group v-model="type" row mandatory label="Product type:">
                <v-radio label="Comic" value="1"/>
                <v-radio label="Book" value="2"/>
              </v-radio-group>
              <v-text-field v-model="image" outlined placeholder="Image URL" prepend-icon="mdi-camera"></v-text-field>
              <v-textarea placeholder="Description" outlined></v-textarea>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" class="d-flex justify-center">
            <v-btn @click.prevent="click" color="success">Add new product</v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
  export default{
    name: 'productForm',
    data() {
      return {
        Pname:"",
        price:"",
        date: null,
        type: null,
        image: "",
        description: ""
      }
    },
    methods: {
      click(){
        let product = {
          name: this.Pname,
          price: this.price,
          publication_date: this.date,
          in_stock_date: new Date(),
          type: this.type,
          img_src: this.image,
          description: this.description
        }
        console.log(product) //adicionar funcao e acrescentar o id
      }
    },

  }
</script>
