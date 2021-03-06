import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import AddMovie from '@/views/AddMovie.vue'
import EditMovie from '@/views/EditMovie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/add-movie',
      name: 'AddMovie',
      component: AddMovie
    },
    {
      path: '/edit-movie/:movie_slug',
      name: 'EditMovie',
      component: EditMovie
    }
  ]
})
