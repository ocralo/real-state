import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar/index.vue'
import mocks from '@/components/Navbar/mocks/items-menu.json'

describe('Navbar', () => {
  const build = () => {
    const wrapper = shallowMount(Navbar)
    return { wrapper, text: wrapper.text() }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  test.each(mocks.items)(
    'should be exist the texts in the menu list',
    ({ name }) => {
      const { text } = build()
      expect(text).toContain(name)
    }
  )
})
