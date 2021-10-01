<template>
  <NuxtLink class="inline-block mr-10" :to="url">
    <nuxt-img
      :alt="name"
      class="block"
      :src="path"
      width="32px"
      height="32px"
    />
  </NuxtLink>
</template>

<script>
export default {
  name: 'SocialIconLink',
  props: {
    url: { type: String, required: true },
    name: { type: String, required: true },
    path: { type: String, required: true },
  },
}
</script>
