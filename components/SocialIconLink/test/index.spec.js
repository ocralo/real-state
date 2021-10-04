import { shallowMount } from '@vue/test-utils'
import SocialIconLink from '@/components/SocialIconLink/index.vue'
import mocks from '@/components/Footer/mocks/items-footer.json'

describe('SocialIconLink', () => {
  const build = (propsData) => {
    const wrapper = shallowMount(SocialIconLink, { propsData })
    return { wrapper, findLink: wrapper.find('a') }
  }

  test('should be render', () => {
    const { wrapper } = build({
      url: 'url',
      name: 'name',
      path: 'path',
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test.each(mocks.socialMedia)(
    'should be render to diferents props',
    ({ url, name, path }) => {
      const { wrapper } = build({
        url,
        name,
        path,
      })

      expect(wrapper.vm).toBeTruthy()
    }
  )
})
