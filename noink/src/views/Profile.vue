<template>
    <v-container v-if="$store.getters.isLogged">
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-row justify="center">
                        <v-card-title v-if="!updating" centered>{{$store.getters.user.name}}</v-card-title>
                        <v-text-field v-else outlined label="Your Name" v-model="name" class="ma-5"></v-text-field>
                    </v-row>
                    <v-row justify="center">
                        <div v-if="!updating">
                            <v-avatar size="15vw" class="elevation-3">
                                <v-img v-if="$store.getters.user.avatar != ''" :src="$store.getters.user.avatar" width="15vw" height="15vw"></v-img>
                                <v-img v-else src="https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg" width="15vw" height="15vw"></v-img>
                            </v-avatar>
                        </div>
                        <v-text-field v-else outlined label="Image URL" v-model="avatar" class="ma-5"></v-text-field>
                    </v-row>
                    <v-row justify="center">
                        <strong class="my-5">Books Read: {{$store.getters.user.booksRead.length}}</strong><br/><br/>
                    </v-row>
                </v-card>
            </v-col>
        </v-row><br/>
        <v-row justify="center">
            <v-btn v-if="!updating" color="success" @click="updating = true">Change profile</v-btn>
            <v-btn v-else color="success" @click.prevent="save">Save Changes</v-btn>
        </v-row>
        <v-row justify="center">
            <h3 class="text-center mt-5" v-if="$store.getters.user.follows.length > 0">Following {{$store.getters.user.follows.length}} users:</h3>
        </v-row>
        <v-row justify="center">
            <v-col
            sm="6"
            md="4"
            lg="3"
            v-for="following in $store.getters.user.follows" :key="following"
            >
                <user-display :user="getUser(following)"/>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12">
                <v-card>
                    <v-card-title> Wishlist</v-card-title>
                    <v-row justify="center">
                        <v-col
                            sm="6"
                            md="4"
                            lg="3"
                            v-for="product in wishlist" :key="product"
                        >
                            <product-card :product="product"/>
                        </v-col>

                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12">
                <v-card>
                    <v-card-title> Collection</v-card-title>
                    <v-row justify="center">
                        <v-col
                            sm="6"
                            md="4"
                            lg="3"
                            v-for="product in collection" :key="product"
                        >
                            <product-card :product="product"/>
                            <v-btn small @click="read(product._id)" color="success" fab outlined class="my-2"> <v-icon>mdi-book-open-page-variant-outline</v-icon> </v-btn>
                        </v-col>

                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import usersClass from '../scripts/users'
    import productCard from '../components/productCard.vue'
    import userDisplay from '../components/UserDisplay.vue'
    export default{
        name: "Profile",
        components:{
            productCard,
            userDisplay
        },
        data() {
            return {
                wishlist: [],
                collection: [],
                name: this.$store.getters.user.name,
                avatar: this.$store.getters.user.avatar,
                updating: false
            }
        },
        created() {
            this.getProducts()
        },
        methods: {
            async getUser(id){
                return await usersClass.getUser(id)
            },
            async getProducts(){
                for(let productID of this.$store.getters.user.wishlist){
                    let resp = await fetch("http://localhost:3000/products/"+productID)
                    if(resp.status === 200){
                        let product = await resp.json()
                        console.log("product:", product)
                        this.wishlist.push(product)
                    }
                }
                for(let productID of this.$store.getters.user.collections){
                    let resp = await fetch("http://localhost:3000/products/"+productID)
                    if(resp.status === 200){
                        let product = await resp.json()
                        this.collection.push(product)
                    }
                }
            },
            async save(){
                this.$store.getters.user.name = this.name
                this.$store.getters.user.avatar = this.avatar
                await fetch("http://localhost:3000/users/"+this.$store.getters.user._id, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.$store.getters.user)
                })
                this.updating = false
            },
            async read(productID){
                this.$store.getters.user.booksRead.push(productID)
                await fetch("http://localhost:3000/users/"+this.$store.getters.user._id, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.$store.getters.user)
                })
                window.alert("Reading")
            }
        }
    }
</script>
