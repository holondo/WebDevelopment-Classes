import users from "..\\assets\\data\\users.json"
class Users{
    //Deals with users procedures
    login(username){
        for (const user of users) {
            if(user.username == username){
                console.log(user)
                return user
            }
            else{
                return{}
            }
        }
    }
}
export default new Users()