<template>
  <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 pt-16 min-h-screen">
    <h1 class="text-xl font-bold md:text-3xl text-center">
      Listas de favoritos
    </h1>
    <section
      class="
        container
        mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
        py-16
      "
    >
      <FavoriteGalleryCard />
      <FavoriteGalleryCard
        v-for="{ id, urlImage, attributes: { name } } in listGallery"
        :key="id"
        :images="urlImage"
        :title="name"
      />
      <NewCardList />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $axios, $config: { apiURL } }) {
    try {
      const listApi = await $axios.$get('/real-estates')
      return { listApi }
    } catch (error) {
      return { error }
    }
  },
  computed: {
    listGallery() {
      const listApi = this.listApi
      const { data, included } = listApi
      const idImagesGallery = data.map(({ attributes, id }) => {
        const { real_estate_ids: realEstateIds } = attributes

        const imageGallery = realEstateIds.map((idImage) =>
          included.find(({ id }) => `${id}` === `${idImage}`)
        )

        const urlImage = imageGallery.map(({ attributes, id }) => ({
          url: attributes.gallery_urls[0],
          id,
        }))

        return { attributes, urlImage, id }
      })

      return idImagesGallery
    },
  },
}
</script>
