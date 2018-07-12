import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import PostVuetify from '../components/PostVuetify'
import PostVue from '../components/PostVue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/vuetify', component: PostVuetify },
    { path: '/vuejs', component: PostVue },
  ],
})
