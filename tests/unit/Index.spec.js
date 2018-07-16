import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Index from '@/components/Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(VueRouter)
const router = new VueRouter()
const wrapper = mount(Index, {
  localVue,
  router,
  stubs: ['v-post-card']
})

describe('Index.vue', () => {
  it('count data.posts', () => {
    expect(wrapper.vm.$data.posts.length).toBe(2)
  })
})
