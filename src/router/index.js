// Default import
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// custom import
import FAQ from '../views/FAQ.vue'
import faqViewTest from '../views/view_test.vue'
import materialTable from '../views/material_table.vue'
import materialCard from '../views/material_card.vue'
import faqDetail from '../views/faq_detail.vue'
import FAQCreate from '../views/faq_create.vue'

Vue.use(VueRouter)

// VModal
import VModal from 'vue-js-modal'
Vue.use(VModal)

// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

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
    path: '/search3',
    name: 'Vue Material Table',
    component: materialTable
  },
  {
    path: '/search4',
    name: 'Vue Material Card',
    component: materialCard
  },
  {
    path: '/create',
    name: 'FAQ Create',
    component: FAQCreate
  },
  {
    path: '/detail/:qid',
    name: 'FAQ Detail',
    component: faqDetail
  },
  {
    path: '/detail/*',
    name: 'no QID',
    component: faqDetail
  }
]
/* eslint-disable */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
