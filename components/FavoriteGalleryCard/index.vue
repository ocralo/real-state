<template>
  <div>
    <GalleryCard :images="images" />
    <p class="text-lg font-semibold mt-3">{{ title }}</p>
    <p class="text-sm text-secundary mt-1">
      {{ totalImages }} {{ $t('propiedades guardadas') }}
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
        return this.$t('Mis favoritos')
      },
    },
    images: {
      type: Array,
      default() {
        return []
      },
      validator(value) {
        const arrayBooleanUrl = value.map((obj) =>
          Object.prototype.hasOwnProperty.call(obj, 'url')
        )

        const detectUrl = arrayBooleanUrl.includes(false)

        const arrayBooleanId = value.map((obj) =>
          Object.prototype.hasOwnProperty.call(obj, 'id')
        )

        const detectId = arrayBooleanId.includes(false)

        return (!detectUrl && !detectId) || value.length === 0
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
