import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import products from "..\\assets\\data\\products.json"
import banners from "..\\assets\\data\\banners.json"
import usersClass from '../scripts/users'
export default new Vuex.Store({
  state: {
    user : {},
    logged: false,
    admin: false,
    products,
    banners,
    search : ""
  },
  mutations: {
    login(state, {foundUser}){
      state.user = foundUser
      console.log(foundUser)
      state.logged = true
      if (foundUser.admin){
        state.admin = true
      }
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
    isAdmin: (state) => {
      return state.admin
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
    },
    banner: (state) => {
      return state.banners
    }  
  },
  modules: {
  }
})
