<template>
    <v-card class="mx-3">
        <v-img :src="product.img_src" height="160"> </v-img>
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>{{productType()}}</v-card-subtitle>
        <v-card-subtitle>Price: ${{product.price}}</v-card-subtitle>
    </v-card>
</template>

<script>
    export default{
        props:{
            product: Object
        },
        methods: {
            productType(){
                let type = "Comic"
                switch (this.product.type) {
                    case 1:
                        type = "Comic"
                        break;
                    case 2:
                        type = "Book"
                        break;
                    
                    default:
                        break;
                }
                return type
            }
        },
    }
</script>
