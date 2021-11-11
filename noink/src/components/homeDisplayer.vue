<template>
    <v-card >
        <v-card-title >{{type}}</v-card-title>
        <v-row class="px-3">
            <v-col
                v-for="i in products.slice(0, 6)"
                :key="i"
                cols="2"
                md="2"
            >
                <router-link style="text-decoration: none; color: inherit" to="produto">
                <div>
                    <v-sheet color="warning" height="150" ></v-sheet>
                    <h4>{{i.name}}</h4><br>
                    {{i.price}}
                </div>
                </router-link>
            </v-col>
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
