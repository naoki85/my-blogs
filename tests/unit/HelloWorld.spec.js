import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      localVue,
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
