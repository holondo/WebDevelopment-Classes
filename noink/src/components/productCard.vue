<template>
    <router-link :to="{name: 'Product', params: {id : product.id}}">
        <v-card>
            <v-img :src="product.img_src" height="150"> </v-img>
            <v-card-title>{{product.name}}</v-card-title>
            <v-card-subtitle>{{product.price}}</v-card-subtitle>
        </v-card>
    </router-link>
</template>

<script>
    export default{
        props:{
            product: Object
        }
    }
</script>
