import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import products from "..\\assets\\data\\products.json"
import usersClass from '../scripts/users'
export default new Vuex.Store({
  state: {
    user : {},
    logged: false,
    products,
    search : ""
  },
  mutations: {
    login(state, {foundUser}){
      state.user = foundUser
      console.log(foundUser)
      state.logged = true
    },
    addWishlist(state, {productId}){
      console.log("Product id: ", productId)
      state.user.wishlist.push(productId)
    }
  },
  actions: {
    performLogin({commit}, username){
      let foundUser = usersClass.login(username)
      if(Object.keys(foundUser).length === 0){
        return false
      }
      commit("login", {foundUser})
      return true
    },
    addToWishlist({commit}, productId){
      commit("addWishlist", {productId})
    }
  },
  getters: {
    isLogged: (state) => {
      return state.logged
    },
    user: (state) => {
      return state.user
    },
    userReadBooks: (state) =>{
      let booksRead = []
      if(state.logged){
        for (const bookID of state.user.booksRead) {
          booksRead.push(state.products[bookID])
        }
      }
      return booksRead
    }
  },
  modules: {
  }
})
