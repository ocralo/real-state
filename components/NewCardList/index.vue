<template>
  <div>
    <button
      class="
        bg-md-blue
        rounded-2xl
        text-sky-blue
        font-light
        h-52
        sm:h-48
        md:h-56
        lg:h-64
        text-9xl
        w-full
      "
    >
      +
    </button>

    <p class="text-lg mt-3 font-medium text-center text-sky-blue">
      {{ $t('Crear una nueva lista') }}
    </p>
  </div>
</template>

<script>
export default { name: 'NewCardList' }
</script>
