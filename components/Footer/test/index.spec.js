import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer/index.vue'
import mocks from '@/components/Footer/mocks/items-footer.json'

describe('Footer', () => {
  const build = () => {
    const wrapper = shallowMount(Footer, {
      stubs: {
        ContactData: true,
        SocialIconLink: true,
      },
    })
    return {
      wrapper,
      text: wrapper.text(),
      findContactData: wrapper.findComponent({ name: 'ContactData' }),
      findSocialIconLink: wrapper.findComponent({ name: 'SocialIconLink' }),
    }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  test('should be render ContactData', () => {
    const { findContactData } = build()
    expect(findContactData).toBeTruthy()
  })

  test('should be render SocialIconLink', () => {
    const { findSocialIconLink } = build()
    expect(findSocialIconLink).toBeTruthy()
  })

  test.each(mocks.otherInfo)(
    'should be exist the otherInfo texts in the footer list',
    ({ text: textFotter }) => {
      const { text } = build()
      expect(text).toContain(textFotter)
    }
  )
})
