import { shallowMount } from '@vue/test-utils'
import GalleryCard from '@/components/GalleryCard/index.vue'

describe('GalleryCard', () => {
  const build = () => {
    const wrapper = shallowMount(GalleryCard)
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })
})
