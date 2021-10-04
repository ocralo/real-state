import { shallowMount } from '@vue/test-utils'
import GalleryCard from '@/components/GalleryCard/index.vue'

describe('GalleryCard', () => {
  const build = (propsData) => {
    const wrapper = shallowMount(GalleryCard)
    const wrapperProps = shallowMount(GalleryCard, { propsData })
    return { wrapper, wrapperProps }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  test('shold be it accepts valid type props', () => {
    const validator = GalleryCard.props.images.validator
    expect(validator(['image'])).toBeFalsy()
  })

  test('should be return number two in totalimages from function computed', () => {
    const { wrapperProps } = build({
      images: [
        { url: 'image1' },
        { url: 'image2' },
        { url: 'image3' },
        { url: 'image4' },
      ],
    })
    expect(wrapperProps.vm.totalNumberImages).toEqual(2)
  })
})
