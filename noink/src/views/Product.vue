<template>
    <v-container>
                <v-card>
        <v-row justify="center">
            <v-card-title>{{product.name}}</v-card-title>
        </v-row>
        <v-row>
            <v-col cols="6" >
                    <v-img :src="product.img_src" width="15vw" class="mx-auto elevation-3"> </v-img>
                    <h3 class="text-center mt-5">Price: ${{product.price}}</h3>
            </v-col>
            <v-col cols="6">

                <span class="mr-5">{{product.description}}</span>
            </v-col>
                    <v-btn :disabled="addedWishlist" color="primary" class="mx-auto my-5" v-if="$store.getters.isLogged" @click.prevent="addToWishlist">
                        <v-icon>mdi-plus-thick</v-icon>
                        Add to Wishlist
                    </v-btn>
                    <v-btn :disabled="addedCart" color="success" class="mx-auto my-5" v-if="$store.getters.isLogged" @click.prevent="addToCart">
                        <v-icon>mdi-cart</v-icon>
                        Add to Cart
                    </v-btn>

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
                this.addedWishlistBool = true
            },
            addToCart(){
                this.$store.state.user.cart.push(this.product.id)
                this.addedCartBool = true
            },
            
        },
        computed:{
            addedCart(){
                if(this.$store.getters.user.cart.includes(this.product.id)){return true}
                return false
            },
            addedWishlist(){
                if(this.$store.getters.user.wishlist.includes(this.product.id)){ return true}
                return false
            }
        }
    } 
</script>
