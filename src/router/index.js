import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'
import FAQCreate from '../views/faq_create.vue'
import About from '../views/About.vue'
import faqViewTest from '../views/view_test.vue'
Vue.use(VueRouter)
import VModal from 'vue-js-modal'
Vue.use(VModal)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/*
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
*/

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About

    //component: function () {
    //  return import(/* webpackChunkName: "about" */ '../views/About.vue')
    //}

  },
  {
    path: '/search',
    name: 'FAQ Tool',
    component: FAQ
  },
  {
    path: '/search2',
    name: 'FAQ Tool2',
    component: faqViewTest
  },
  {
    path: '/create',
    name: 'FAQ Create',
    component: FAQCreate
  }
]
/* eslint-disable */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
