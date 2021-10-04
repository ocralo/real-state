import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar/index.vue'

describe('Navbar', () => {
  const build = () => {
    const wrapper = shallowMount(Navbar)
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })
})
