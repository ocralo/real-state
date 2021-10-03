import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer/index.vue'

describe('Footer', () => {
  const build = () => {
    const wrapper = shallowMount(Footer, {
      stubs: {
        ContactData: true,
        SocialIconLink: true,
      },
    })
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })
})
