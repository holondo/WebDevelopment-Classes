<template>
    <v-container v-if="$store.getters.isLogged">
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-row justify="center">
                        <v-card-title centered>{{$store.getters.user.name}}</v-card-title>
                    </v-row>
                    <v-row justify="center">
                        <v-avatar size="15vw">
                        <v-img :src="$store.getters.user.avatar" width="15vw" height="15vw"></v-img>
                        </v-avatar>
                    </v-row>
                    <v-row justify="center">
                        <strong>Books Read: </strong>
                        {{$store.getters.user.booksRead.length}}
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="6">
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
            <v-col cols="6">
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
    import productCard from '../components/productCard.vue'
    export default{
        name: "Profile",
        components:{
            productCard
        }
    }
</script>
