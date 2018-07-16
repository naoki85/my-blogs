import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import PostVuetify from '@/components/PostVuetify.vue'
import PostVue from '@/components/PostVue.vue'

describe('PostVuetify.vue', () => {
  it('renders title', () => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    const wrapper = mount(PostVuetify, {
      localVue
    })
    expect(wrapper.text()).toMatch('About Vuetify')
  })
})

describe('PostVue.vue', () => {
  it('renders title', () => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    const wrapper = mount(PostVue, {
      localVue
    })
    expect(wrapper.text()).toMatch('About Vue.js')
  })
})
