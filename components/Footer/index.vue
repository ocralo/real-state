<template>
  <footer class="bg-primary">
    <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 pt-8 pb-24">
      <nuxt-img
        :alt="$t('brand la haus')"
        class="block"
        src="/icons/logo-icon-white.svg"
        width="175px"
        height="35px"
      />
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          sm:grid-cols-1
          lg:grid-cols-4
          gap-4
          mt-8
        "
      >
        <ContactData
          v-for="{ id, title, subtitle, direction, phone } in headquarters"
          :key="id"
          :title="title"
          :subtitle="subtitle"
          :direction="direction"
          :phone="phone"
        />
      </div>
      <div class="mt-8">
        <SocialIconLink
          v-for="{ id, url, path, name } in socialMedia"
          :key="id"
          :url="url"
          :path="path"
          :name="name"
        />
      </div>
      <div class="mt-4">
        <p
          v-for="({ id, text, url }, index) in otherInfo"
          :key="id"
          class="inline-block text-xs font-light"
        >
          <NuxtLink v-if="!!url" :to="url">
            {{ text }}
          </NuxtLink>
          <span v-if="!!!url">{{ text }}</span>
          <span
            v-if="index != Object.keys(otherInfo).length - 1"
            class="mx-2 font-bold"
            >·</span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { headquarters, socialMedia, otherInfo } from './mocks/items-footer.json'
export default {
  name: 'Footer',
  data() {
    return { headquarters, socialMedia, otherInfo }
  },
}
</script>
