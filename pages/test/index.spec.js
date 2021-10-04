import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/index.vue'
import mockData from '@/pages/test/mocks/data.json'
import mockIncluded from '@/pages/test/mocks/included.json'
import mockResolved from '@/pages/test/mocks/resolved.json'

describe('Home', () => {
  const build = () => {
    const axiosMock = { $get: jest.fn().mockResolvedValue([]) }
    const wrapper = shallowMount(Home, {
      stubs: {
        FavoriteGalleryCard: true,
        NewCardList: true,
      },
    })

    wrapper.vm.$options.asyncData({ $axios: axiosMock })
    return { wrapper }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  test('should be return mocksResolve in listGallery from function computed', async () => {
    const { wrapper } = build()
    await wrapper.setData({
      listApi: { data: mockData, included: mockIncluded },
    })

    expect(wrapper.vm.listGallery).toEqual(mockResolved)
  })
})
