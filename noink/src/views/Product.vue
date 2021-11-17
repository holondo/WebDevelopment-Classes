<template>
    <v-container>
                <v-card>
        <v-row justify="center">
            <v-col cols="12" >
                    <v-card-title>{{product.name}}</v-card-title>
                    <v-img :src="product.img_src" width="15vw" class="mx-auto"> </v-img>
                    <h3 class="text-center">Price: ${{product.price}}</h3>
            </v-col>
                    <v-btn color="primary" class="mx-auto" v-if="$store.getters.isLogged" @click.prevent="addToWishlist">Add to Wishlist</v-btn>
        </v-row>
                </v-card>
    </v-container>
</template>
<script>
    export default{
        name: "Product",
        data(){
            return{
                product: {}
            }
        },
        created(){
            let productID = this.$route.params.id
            if(productID <= this.$store.state.products.length){
                this.product = this.$store.state.products[productID]
            }
        },
        methods: {
            addToWishlist(){
                this.$store.dispatch("addToWishlist", this.product.id)
            }
        },
    } 
</script>
