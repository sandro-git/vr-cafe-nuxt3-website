<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    }
  },
}
</script>

<template>
  <div class="bg-gray-900 grid grid-cols-1 grid-rows-2">
    <h2
      class="
        sm:text-4xl
        lg:text-5xl
        text-3xl
        font-extrabold
        text-white text-center
        pb-8
        px-4
        pt-6
      "
    >
      <span class="border-b-2 border-white">{{ title }}</span>
    </h2>
    <div class="subtile bg-gray-800 flex items-center">
      <p
        class="
          lg:w-1/2
          sm:text-4xl
          lg:text-5xl
          text-3xl
          font-extrabold
          text-white text-center
          h-1/2
          mx-auto
        "
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>


<style scoped></style>
