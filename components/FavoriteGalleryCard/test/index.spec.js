import { shallowMount } from '@vue/test-utils'
import FavoriteGalleryCard from '@/components/FavoriteGalleryCard/index.vue'

describe('FavoriteGalleryCard', () => {
  const build = () => {
    const wrapper = shallowMount(FavoriteGalleryCard, {
      stubs: {
        GalleryCard: true,
      },
    })
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  test('shold be it accepts valid type props', () => {
    const validator = FavoriteGalleryCard.props.images.validator
    expect(validator(['image'])).toBeFalsy()
  })
})
