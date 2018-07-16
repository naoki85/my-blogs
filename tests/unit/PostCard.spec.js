import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import PostCard from '@/components/PostCard.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(VueRouter)
const router = new VueRouter()

describe('PostCard.vue', () => {
  it('renders props when passed', () => {
    const wrapper = mount(PostCard, {
      localVue,
      router,
      propsData: { title: 'About Ruby', date: '2018-07-14', to: '/ruby', src: '/img/logo.png' }
    })
    expect(wrapper.text()).toMatch('About Ruby')
  })
})
