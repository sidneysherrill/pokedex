<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import PokemonInfo from "@/components/PokemonInfo.vue";
import PokemonStats from "@/components/PokemonStats.vue";

const props = defineProps({
  id: String,
});

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchFavorites();
  pokemon.fetchActive(props.id);
});
</script>

<template>
  <h1
    class="capitalize text-3xl sm:text-4xl pb-8 px-4 text-center sm:text-left"
  >
    {{ pokemon.active?.forms[0].name }}
  </h1>
  <div
    class="capitalize font-mono p-4 bg-lime-200 grid md:grid-cols-2 gap-8 rounded-lg"
    v-if="pokemon.active"
  >
    <div class="md:order-last">
      <button
        @click="pokemon.toggleFavorite(id)"
        :class="{
          'bg-red-400 hover:bg-red-500': pokemon.favorites.includes(id),
          'bg-emerald-400 hover:bg-emerald-500':
            !pokemon.favorites.includes(id),
        }"
        class="text-white px-3 py-1 rounded font-bold hover:shadow float-right"
      >
        {{
          pokemon.favorites.includes(id) ? "Remove Favorite" : "Add Favorite"
        }}
      </button>
      <img
        class="w-full"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`"
      />
    </div>
    <div class="flex flex-col gap-4 justify-start">
      <pokemon-info
        :abilities="pokemon.active.abilities"
        :weight="pokemon.active.weight"
        :height="pokemon.active.height"
      />
      <pokemon-stats :stats="pokemon.active.stats" />
    </div>
  </div>
</template>
