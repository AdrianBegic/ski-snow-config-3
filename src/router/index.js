import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    name: 'sportOption',
    component: () => import('../components/Option.vue')
  },

  {
    path: '/sportOption/:id',
    name: 'subSportOption',
    component: () => import('../components/subSportDesc.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router