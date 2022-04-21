<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchList();
  pokemon.fetchFavorites();
});
</script>

<template>
  <div>
    <h1 class="text-3xl sm:text-4xl pb-8 px-4 text-center sm:text-left">
      Favorites
    </h1>
    <div>
      <ol
        v-if="pokemon.favoritesList && pokemon.favoritesList.length"
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <li
          class="capitalize font-mono hover:italic hover:font-bold shadow hover:shadow-lg rounded-md p-1 bg-amber-200 hover:bg-amber-300"
          v-for="p in pokemon.favoritesList"
        >
          <router-link :to="`/pokemon/${p.id}`">
            <img
              class="w-full"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`"
              loading="lazy"
              width="100"
              height="100"
            />
            <span class="px-1.5">
              {{ p.name }}
            </span>
          </router-link>
        </li>
      </ol>
      <div v-else class="mt-48 flex justify-center items-center">
        <div class="bg-white hover:shadow p-6 rounded max-w-lg">
          <p class="text-lg text-center">
            You have not favorited anything yet. Visit the the list page to
            browse available Pokémon, then select your favorites.
          </p>
          <router-link
            to="/"
            class="block text-center rounded mt-4 px-4 py-2 bg-black text-white max-w-xs mx-auto"
          >
            Browse Pokémon
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
