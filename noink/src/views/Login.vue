<template>
    <v-container>
        <v-card class="pb-3">
            <v-row justify="center">
                <v-col cols="6">
                    <v-text-field
                    clearable
                    label="username"
                    rounded
                    outlined
                    v-model="username"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-btn @click.prevent="performLogin"> Login </v-btn>
            </v-row>
            <v-row justify="center">
                <v-alert
                shaped
                dense
                dark
                type="warning"
                v-if="userNotFound"
                >
                Usuário não encontrado
                </v-alert>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            username: "",
            userNotFound : false
        }
    },
    methods: {
        performLogin(){
            this.$store.dispatch("performLogin", this.username).then((response) => {
                console.log(response)
                if(response){
                    this.userNotFound = false
                    this.$router.push({name: "Home"})
                }
                else{
                    this.userNotFound = true
                }
            })
        }
    }
}
</script>
