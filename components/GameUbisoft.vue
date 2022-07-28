<script setup>

const query = groq`*[_type == "game"]{
  name,
  "imageUrl": image.asset->url
}`;
const { data } = useSanityQuery(query);

</script>

<template>
  <div class="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 flex flex-wrap justify-evenly" v-if="data">
    <!-- card jeu ubisoft -->
    <div v-for="game in data"
      v-bind:key="game._id"
      class="max-w-sm rounded-lg my-2"
    >
      <a
        href="#"
        class="flex flex-col items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg "
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ game.name }}</h5>
        <!-- {{ game.image.asset._ref }} -->
        <img
          :src="game.imageUrl"
          class="rounded-lg"
          :alt="game.alt"
        >
      </a>
    </div>
    <!-- fin card jeu ubisoft -->
  </div>
  <p v-else class="text-center">
    Aucun jeux disponibles 🎮
  </p>
</template>

<style scoped></style>
