<template>
    <v-card >
        <v-card-title >{{type}}</v-card-title>
        <v-row class="px-3">
            <v-col
                v-for="i in products.slice(0, 6)"
                :key="i._id"
                cols="2"
                md="2"
            >
                <router-link style="text-decoration: none; color: inherit" :to="{name : 'Product', params: {id: i._id}}">
                <div>
                    <v-img :src="i.img_src" height="150"> </v-img>
                    <h4>{{i.name}}</h4><br>
                    Price: ${{i.price}}
                </div>
                </router-link>
            </v-col>
            <h4 v-if="products.length === 0" class="mx-3"> Choose something from your collection to read..</h4>
        </v-row>
    </v-card>
</template>

<script>
export default{
    props: {
        products: Array,
        type: String
    }
}
</script>
