<template>
  <header>
    <nav class="bg-white border-b border-ligth">
      <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="isOpen = !isOpen"
            >
              <span class="sr-only">Open main menu</span>
              <img
                class="block lg:hidden h-8"
                width="31px"
                height="32px"
                src="~/assets/icons/menu.svg"
                alt="Workflow"
              />
            </button>
          </div>
          <div
            class="
              flex-1 flex
              items-left
              justify-left
              sm:items-stretch sm:justify-start
            "
          >
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block ml-12 md:ml-0 lg:hidden h-8"
                width="31px"
                height="32px"
                src="~/assets/icons/logo-mobile.svg"
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-8"
                src="~/assets/icons/logo.svg"
                width="125px"
                height="24px"
                alt="Workflow"
              />
            </div>
            <div class="hidden md:block sm:ml-auto">
              <div class="flex space-x-4">
                <NuxtLink
                  v-for="item in itemsMenu"
                  :key="item.id"
                  :to="item.path"
                  aria-current="page"
                  class="text-dark px-3 py-2 rounded-md text-sm font-normal"
                >
                  {{ item.name }}
                </NuxtLink>
                <NuxtLink
                  to="/"
                  class="text-dark font-semibold px-3 py-2 rounded-md text-sm"
                >
                  Mi Perfil
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div
        id="mobile-menu"
        class="md:hidden bg-ligth"
        :class="{ hidden: !isOpen }"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="item in itemsMenu"
            :key="item.id"
            :to="item.path"
            class="
              text-dark
              hover:bg-dark hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import itemsMenu from './mocks/items-menu.json'

export default {
  name: 'Navbar',
  data() {
    return { isOpen: false, itemsMenu }
  },
}
</script>
