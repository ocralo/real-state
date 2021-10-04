import { shallowMount } from '@vue/test-utils'
import ContactData from '@/components/ContactData/index.vue'
import mocks from '@/components/Footer/mocks/items-footer.json'

describe('ContactData', () => {
  const build = (propsData) => {
    const wrapper = shallowMount(ContactData, { propsData })
    return { wrapper, text: wrapper.text() }
  }

  test('should be render', () => {
    const { wrapper } = build({
      title: 'title',
      subtitle: 'subtitle',
      direction: 'direction',
      phone: 'phone',
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test.each(mocks.headquarters)(
    'should be render to diferents props',
    ({ title, subtitle, direction, phone }) => {
      const { wrapper } = build({
        title,
        subtitle,
        direction,
        phone,
      })

      expect(wrapper.vm).toBeTruthy()
    }
  )

  test.each(mocks.headquarters)(
    'should be exist the title, subtitle, direction and phone texts',
    ({ title, subtitle, direction, phone }) => {
      const { text } = build({
        title,
        subtitle,
        direction,
        phone,
      })

      expect(text).toContain(title)
      expect(text).toContain(subtitle)
      expect(text).toContain(direction)
      expect(text).toContain(phone)
    }
  )
})
