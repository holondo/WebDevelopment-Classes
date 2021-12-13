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
                            v-for="product in products" :key="product"
                            >
                            <productCard :product="product"/>
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
                bought : false,
                products : []
            }
        },
        created() {
            this.getProducts()
        },
        methods:{
            cartPrice() {
                let total = 0
                for (const product of this.products) {
                    total += product.price
                }
                return total
            },
            async buy(){
                this.bought = true
                this.$store.getters.user.collections = this.$store.getters.user.collections.concat(this.$store.getters.user.cart)
                this.$store.getters.user.cart = []
                console.log("collection: ", this.$store.getters.user.collections)
                console.log(JSON.stringify(this.$store.getters.user))
                await fetch("http://localhost:3000/users/"+this.$store.getters.user._id, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.$store.getters.user)
                })
                setTimeout(() => {
                    this.$router.push({name: "Home"})
                },1000 );
                
            },
            isEmpty(){
                if(this.$store.getters.user.cart.length === 0) return true
                else return false
            },
            async getProducts(){
                for(let productID of this.$store.getters.user.cart){
                    let resp = await fetch("http://localhost:3000/products/"+productID)
                    if(resp.status === 200){
                        let product = await resp.json()
                        this.products.push(product)
                    }
                }
            }
        }
    }
</script>
