import { shallowMount } from '@vue/test-utils'
import ContactData from '@/components/ContactData/index.vue'

describe('ContactData', () => {
  const build = (propsData) => {
    const wrapper = shallowMount(ContactData, { propsData })
    return { wrapper }
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
})
