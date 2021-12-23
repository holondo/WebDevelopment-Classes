import Vue from 'vue'
import Vuex from 'vuex'
const backend = "http://localhost:3000/"

Vue.use(Vuex)
//import products from "..\\assets\\data\\products.json"
//import banners from "..\\assets\\data\\banners.json"
import usersClass from '../scripts/users'
export default new Vuex.Store({
  state: {
    user : {},
    logged: false,
    admin: false,
    //products,
    banners: {},
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
    async addWishlist(state, {productId}){
      console.log("user id: ", state.user._id)
      state.user.wishlist.push(productId)
      await fetch(backend+"users/"+state.user._id, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(state.user)
      })
    },
    async addCart(state, {productId}){
      state.user.cart.push(productId)
      console.log("user:", JSON.stringify(state.user))
      let resp = await fetch(backend+"users/"+state.user._id, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(state.user)
      })
      resp = await resp.json()
      console.log(resp)
    },
    // async updateProducts(state){
    //   state.products = await fetch("https://localhost:3000/products")
    // }
  },
  actions: {
    async performLogin({commit}, userObj){
      console.log("Perform login", userObj)
      let foundUser = await usersClass.login(userObj)
      if(Object.keys(foundUser).length === 0){
        return false
      }
      commit("login", {foundUser})
      return true
    },
    addToWishlist({commit}, productId){
      commit("addWishlist", {productId})
    },
    addToCart({commit}, productId){
      commit("addCart", {productId})
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
    userReadBooks: async (state) =>{
      let booksRead = []
      if(state.logged){
        for(let productID of state.user.booksRead){
          let resp = await fetch("http://localhost:3000/products/"+productID)
          if(resp.status === 200){
              let product = await resp.json()
              booksRead.push(product)
          }
        }
      }
      console.log("BOOKSREAD index:", booksRead)
      return booksRead
    },
    currBanner: async (state) => {
      let resp = await fetch("http://localhost:3000/banner")
      state.banners = await resp.json()
      return state.banners
    },
    getProductByID: async(state, id) => {
      let product = await fetch("http://localhost:3000/products/"+id)
      return product
    }
  },
  modules: {
  }
})
