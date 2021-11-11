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
                        <v-img src="../assets/logo.png" width="15vw" height="15vw"></v-img>
                        </v-avatar>
                    </v-row>
                    <v-row justify="center">
                        <strong>Books Read: </strong>
                        {{$store.getters.user.booksRead.length}}
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default{
        name: "Profile"
    }
</script>
