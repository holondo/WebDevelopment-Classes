class Users{
    //Deals with users procedures
    async login(userObj){
        // for (const user of users) {
        //     if(user.username == username){
        //         console.log(user)
        //         return user
        //     }
        // }
        // return{}
        let resp = await fetch("http://localhost:3000/login/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userObj)
        })
        let user = await resp.json()
        console.log(user)
        return user.body
    }

    async getUser(userId){
        let resp = await fetch("http://localhost:3000/users/" + userId)
        let foundUser = await resp.json()
        return foundUser
    }
}
export default new Users()