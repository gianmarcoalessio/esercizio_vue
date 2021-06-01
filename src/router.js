import { createRouter,createWebHistory } from 'vue-router'
import {bus } from '@eng/bus';
import Home from "@comp/main.vue"
import About from "@comp/about.vue"
import Altro from "@comp/altro.vue"



const routes = [
  { path: '/', component: Home },
  { path: '/altro/:id', component: Altro },
  { path: '/altro', component: Altro },
  { path: '/about', component: About },
]
export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

