<template>
  <div
    class="border border-white relative w-72 h-44 rounded-2xl overflow-hidden"
  >
    <nuxt-img
      v-if="numberImages < 0"
      class="object-cover bg-white object-left-top w-full h-auto"
      src="icons/favorites.svg"
      loading="lazy"
    />
    <nuxt-img
      v-if="numberImages >= 0"
      class="
        absolute
        border
        bg-dark
        border-white
        rounded-2xl
        object-cover
        h-full
      "
      :class="classImage[0] || 'hiden'"
      :src="images[0].url"
      loading="lazy"
    />
    <nuxt-img
      v-if="numberImages > 0"
      class="
        absolute
        border
        bg-dark
        border-white
        rounded-2xl
        object-cover
        h-full
      "
      :class="classImage[1] || 'hiden'"
      :src="images[1].url"
      loading="lazy"
    />
    <div
      v-if="numberImages > 1"
      class="absolute object-cover h-full w-9/12 right-0 z-0"
    >
      <nuxt-img
        class="absolute object-cover h-full w-full mix-blend-screen"
        :src="images[2].url"
        loading="lazy"
      />
      <div
        class="
          absolute
          h-full
          w-full
          bg-dark
          opacity-80
          flex
          justify-end
          items-center
          pr-3
          text-white
          font-bold
        "
      >
        +{{ totalNumberImages }}
      </div>
    </div>
  </div>
</template>

<script>
import classes from './structure/arrayClass.json'
export default {
  name: 'GalleryCard',
  props: {
    images: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    totalNumberImages() {
      const images = this.images
      const totalNumberImages = images.length - 2
      return totalNumberImages || 0
    },
    threeFirstImages() {
      const images = this.images
      const threeFirstImages = images.slice(0, 3)
      return threeFirstImages
    },
    numberImages() {
      const threeFirstImages = this.threeFirstImages
      const numberImages = threeFirstImages.length - 1 || 0
      return numberImages
    },
    classImage() {
      const numberImages = this.numberImages
      return classes[numberImages]
    },
  },
}
</script>
