<script setup>

defineProps(['data'])
</script>

<template>

  <div class="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 flex flex-wrap py-3 justify-between px-8"  v-if="data">
    <!-- card jeu ubisoft -->
   
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3  h-96 overflow-hidden" v-for="game in data"
      :key="game._id">
       {{game.slug.current}}
          <img
            :src="$urlFor(game.imageUrl).size(426,250).url()"
            :alt="game.name"
            height="250"
            width="426"
            loading="lazy"
          />
      <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{game.name}}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{game.text}}</p>
          <div class="flex justify-evenly">
            <nuxt-link :to="game.slug.current" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  En savoir plus
            </nuxt-link>
            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Réserver
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
          
      </div>
    </div>
    <!-- fin card jeu ubisoft -->
  </div>
  <p v-else class="text-white text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 font-bold tracking-wide h-24 flex items-center justify-center">
    Aucun jeux disponibles, essayez de recharger la page 🎮
  </p>
  

</template>

<style scoped></style>
