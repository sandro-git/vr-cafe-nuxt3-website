<script setup>
const props = defineProps(['data'])

</script>

<template>
  <div class="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 flex flex-wrap justify-evenly" v-if="data">
    <!-- card jeu ubisoft -->
    <div v-for="editor in data" :key="editor.name"
      class="max-w-sm rounded-lg my-2"
    >
      <a
        href="#"
        class="flex flex-col items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg "
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ editor.name }}</h5>
        <img
          :src="editor.image"
          class="rounded-lg h-48"
          :alt="editor.alt"
        >
      </a>
    </div>
    <!-- fin card jeu ubisoft -->
  </div>
  <p v-else class="text-white text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 font-bold tracking-wide">
    Aucun partenaires disponibles 🎮
  </p>
</template>

<style scoped></style>
