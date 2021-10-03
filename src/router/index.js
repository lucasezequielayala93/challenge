import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../pages/Users.vue'
import Posts from '../pages/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Users
  },
  {
    path: '*',
    component: Users
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:id/posts',
    name: 'User',
    component: Posts,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
