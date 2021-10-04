<template>
  <div
    class="
      border border-white
      relative
      h-52
      sm:h-48
      md:h-56
      lg:h-64
      rounded-2xl
      overflow-hidden
    "
  >
    <nuxt-img
      v-if="numberImages < 0"
      class="absolute bg-white object-cover object-center w-full h-full"
      src="/icons/favorites.svg"
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
          pr-4
          sm:pr-4
          md:pr-5
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
      validator(value) {
        const arrayBooleanUrl = value.map((obj) =>
          Object.prototype.hasOwnProperty.call(obj, 'url')
        )

        const detectUrl = arrayBooleanUrl.includes(false)
        return (Array.isArray(value) && !detectUrl) || value.length === 0
      },
    },
  },
  computed: {
    totalNumberImages() {
      const images = this.images
      const totalNumberImages = images.length - 2
      return totalNumberImages
    },
    threeFirstImages() {
      const images = this.images
      const threeFirstImages = images.slice(0, 3)
      return threeFirstImages
    },
    numberImages() {
      const threeFirstImages = this.threeFirstImages
      const numberImages = threeFirstImages.length - 1
      return numberImages
    },
    classImage() {
      const numberImages = this.numberImages
      return classes[numberImages]
    },
  },
}
</script>
