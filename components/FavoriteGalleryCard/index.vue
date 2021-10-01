<template>
  <div class="w-72">
    <GalleryCard />
    <p class="text-lg font-semibold mt-3">Mis favoritos</p>
    <p class="text-sm text-secundary mt-1">
      {{ totalImages }} propiedades guardadas
    </p>
  </div>
</template>

<script>
export default {
  name: 'FavoriteGalleryCard',
  props: {
    title: {
      type: String,
      default() {
        return 'Mis favoritos'
      },
    },
    images: {
      type: Array,
      default() {
        return []
      },
      validator(value) {
        const objKeys = Object.keys(value)
        return (
          (objKeys.includes('images') && objKeys.includes('id')) ||
          value.length === 0
        )
      },
    },
  },
  computed: {
    totalImages() {
      const images = this.images
      return images.length || 0
    },
  },
}
</script>
