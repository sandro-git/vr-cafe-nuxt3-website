<script lang="ts" >
export default {
  name: 'TitleWithoutSubtilte',
  props: {
    exclu: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div class="bg-gray-800 py-10">
    <div class="flex w-full justify-center items-center">
      <p
        class="
          lg:w-1/2
          sm:text-4xl
          lg:text-5xl
          text-3xl
          font-extrabold
          text-white text-center
        "
      >
        <span
          v-if="exclu"
          class="inline-block border-white border-b-2 mb-8"
        >EXCLUSIVITÉ</span><br v-if="exclu">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
