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
            console.log(productID)
                //this.product = this.$store.state.products[productID]
            this.getProduct(productID)
        },
        methods: {
            addToWishlist(){
                this.$store.dispatch("addToWishlist", this.product._id)
                this.addedWishlistBool = true
            },
            addToCart(){
                this.$store.dispatch("addToCart", this.product._id)
                this.addedCartBool = true
            },
            async getProduct(productID){
                let resp = await fetch("http://localhost:3000/products/"+productID)
                this.product = await resp.json()
                console.log(this.product)
            }
            
        },
        computed:{
            addedCart(){
                if(this.$store.getters.user.cart.includes(this.product._id)){return true}
                return false
            },
            addedWishlist(){
                if(this.$store.getters.user.wishlist.includes(this.product._id)){ return true}
                return false
            }
        }
    } 
</script>
