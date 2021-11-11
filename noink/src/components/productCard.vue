<template>
    <router-link :to="'\\product\\' + product.id">
        <v-card>
            <v-sheet color="warning" height="150" ></v-sheet>
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
