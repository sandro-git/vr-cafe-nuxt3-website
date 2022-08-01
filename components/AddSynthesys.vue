<script  setup>
  
</script>

<template>
  <div class="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 flex flex-wrap justify-evenly">
    <!-- card jeu ubisoft -->
    <div
      v-for="game in myGame"
      :key="game"
      class="max-w-xs rounded-lg my-2"
    >
      <a
        href="#"
        class="flex flex-col items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg "
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ game.title }}</h5>
        <img
          :src="game.image"
          class="rounded-lg"
          :alt="game.alt"
        >
      </a>
    </div>
    <!-- fin card jeu ubisoft -->
  </div>
</template>

<style scoped></style>
