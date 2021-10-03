// Dependencies
import { config } from '@vue/test-utils'

// Mock i18n module
config.mocks.$tc = (msg) => msg
config.mocks.$t = (msg) => msg

config.stubs.NuxtLink = true
config.stubs['nuxt-img'] = true
