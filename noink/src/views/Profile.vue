<template>
    <v-container v-if="$store.getters.isLogged">
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-row justify="center">
                        <v-card-title centered>{{$store.getters.user.name}}</v-card-title>
                    </v-row>
                    <v-row justify="center">
                        <v-avatar size="15vw" class="elevation-3">
                        <v-img :src="$store.getters.user.avatar" width="15vw" height="15vw"></v-img>
                        </v-avatar>
                    </v-row>
                    <v-row justify="center">
                        <strong class="my-5">Books Read: {{$store.getters.user.booksRead.length}}</strong><br/><br/>
                    </v-row>
                </v-card>
            </v-col>
        </v-row><br/>
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
                            v-for="productID in $store.getters.user.wishlist" :key="productID"
                        >
                            <product-card :product="$store.state.products[productID]"/>
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
                            v-for="productID in $store.getters.user.collection" :key="productID"
                        >
                            <product-card :product="$store.state.products[productID]"/>
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
        methods: {
            getUser(id){
                return usersClass.getUser(id)
            }
        }
    }
</script>
