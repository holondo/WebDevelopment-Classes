<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col cols="6" offset="2">
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
                    <v-btn @click.prevent="performLogin"> Login </v-btn>
                    <span color="error" v-if="userNotFound">Usuário não encontrado</span>
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
