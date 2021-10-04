import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/index.vue'

describe('Home', () => {
  const build = () => {
    const wrapper = shallowMount(Home, {
      stubs: {
        FavoriteGalleryCard: true,
        NewCardList: true,
      },
    })
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build()

    expect(wrapper.vm).toBeTruthy()
  })
})
