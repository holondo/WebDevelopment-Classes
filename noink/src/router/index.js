import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('../views/Explore.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/new-product',
    name: 'ProductForm',
    component: () => import('../views/productForm.vue')
  },
  {
    path: '/new-banner',
    name: 'BannerForm',
    component: () => import('../views/BannerForm.vue')
  }  
]

const router = new VueRouter({
  routes
})

export default router
