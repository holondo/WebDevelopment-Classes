<template>
    <v-container>
        <v-row align="center">
            <h1>Your Cart</h1>
        </v-row>
        <div v-if="$store.getters.isLogged">
            <v-row align="center">
                <v-col cols="6">
                    <v-card>
                        <v-card-title>Products</v-card-title>
                        <h4 v-if="isEmpty()" class="text-center mb-5">Add some products to your cart</h4>
                        <v-row align="center" v-else>
                            <v-col 
                            sm="12"
                            md="8"
                            lg="4"
                            v-for="productID in userCart" :key="productID"
                            >
                            <productCard :product="$store.state.products[productID]"/>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="6" class="align-self-start">
                    <v-card >
                        <v-card-subtitle>Cart Description</v-card-subtitle>
                        <v-row align="center">
                            <v-col cols="12" class="d-flex justify-center">
                                <div v-if="!isEmpty()">
                                    <h3 class="my-5">Total: ${{cartPrice()}}</h3>
                                    <v-btn v-if="!bought" color="primary" @click.prevent="buy" >
                                        Buy Now
                                    </v-btn>
                                    <v-alert
                                    shaped
                                    dense
                                    dark
                                    type="success"
                                    v-else
                                    >
                                        All Right!
                                    </v-alert>
                                </div>
                                <h4 v-else>Empty cart</h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
    import productCard from '../components/CartProducts.vue'
    export default{
        components: { productCard },
        name: "Cart",
        data() {
            return {
                userCart: this.$store.getters.user.cart,
                bought : false
            }
        },
        methods:{
            cartPrice() {
                let total = 0
                for (const productID of this.userCart) {
                    total += this.$store.state.products[productID].price
                }
                return total
            },
            buy(){
                this.bought = true
                setTimeout(() => {
                    this.$store.getters.user.cart = []
                    this.$router.push({name: "Home"})
                },1000 );
                
            },
            isEmpty(){
                if(this.$store.getters.user.cart.length === 0) return true
                else return false
            }
        }
    }
</script>
