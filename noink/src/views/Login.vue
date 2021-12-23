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
                    @keyup.enter="performLogin"
                    required
                    :rules="[() => !!username || 'The username is required']"
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="password"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        required
                        :type="show ? 'text' : 'password'"
                        label="Password"
                        @keyup.enter="performLogin"
                        counter
                        outlined
                        rounded
                        @click:append="show = !show"
                    ></v-text-field>
                    <v-checkbox
                        v-model="checkbox"
                        label="Admin"
                    ></v-checkbox>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-btn @click.prevent="performLogin" class="mb-5"> Login </v-btn>
                <v-btn @click.prevent="createUser" class="mb-5"> Create</v-btn>
            </v-row>
            <v-row justify="center">
                <v-alert
                shaped
                dense
                dark
                type="warning"
                v-if="userNotFound"
                >
                Wrong credetials 😒
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
            userNotFound : false,
            checkbox: false,
            password : "",
            show : false
        }
    },
    methods: {
        performLogin(){
            this.$store.dispatch("performLogin", {
                username : this.username,
                password : this.password,
                }).then((response) => {
                console.log(response)
                if(response){
                    this.userNotFound = false
                    this.$router.push({name: "Home"})
                }
                else{
                    this.userNotFound = true
                }
            })
        },
        async createUser(){
            let resp = await fetch("http://localhost:3000/users",{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                    admin: this.checkbox
                })
            })
            if(resp.status === 201){window.alert("Criou")}
        }
    }
}
</script>
