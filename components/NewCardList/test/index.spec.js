import { shallowMount } from '@vue/test-utils'
import NewCardList from '@/components/NewCardList/index.vue'

describe('NewCardList', () => {
  const build = () => {
    const wrapper = shallowMount(NewCardList)
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })
})
