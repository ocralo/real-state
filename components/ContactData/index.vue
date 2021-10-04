<template>
  <div>
    <h3 class="font-semibold text-sm mb-3">{{ title }}</h3>
    <p class="font-light text-sm">{{ subtitle }}</p>
    <p class="font-light text-sm">{{ direction }}</p>
    <p class="font-light text-sm">
      <NuxtLink to="/">
        <nuxt-img
          :alt="$t('brand la haus')"
          class="hidden md:inline-block h-8"
          src="/icons/whatsapp-black.svg"
          width="14px"
          height="14px"
        /><span class="ml-2">{{ phone }}</span>
      </NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContactData',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    direction: { type: String, required: true },
    phone: { type: String, required: true },
  },
}
</script>
