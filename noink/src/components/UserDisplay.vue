<template>
    <v-card >
        <v-card-title class="text-center">{{user.name}}</v-card-title>
        <v-row>
            <v-avatar height="15vh" width="15vh" class="mx-auto elevation-3">
                <v-img :src="user.avatar"></v-img>
            </v-avatar>
            <v-col cols="12">
                <v-card-subtitle class="mx-5">Read {{user.booksRead.length}} books</v-card-subtitle>
                <p class="mx-5">@{{user.username}}</p>
            </v-col>
        </v-row>                
    </v-card>
</template>
<script>
    export default{
        name: "UserDisplay",
        props:{
            user: Object
        }
    } 
</script>
