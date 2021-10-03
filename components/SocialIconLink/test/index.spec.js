import { shallowMount } from '@vue/test-utils'
import SocialIconLink from '@/components/SocialIconLink/index.vue'

describe('SocialIconLink', () => {
  const build = (propsData) => {
    const wrapper = shallowMount(SocialIconLink, { propsData })
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build({
      url: 'url',
      name: 'name',
      path: 'path',
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
