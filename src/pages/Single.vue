<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import PokemonInfo from "@/components/PokemonInfo.vue";
import PokemonStats from "@/components/PokemonStats.vue";
import PokemonSpecies from "@/components/PokemonSpecies.vue";

const props = defineProps({
  id: String,
});

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchActive(props.id);
});
</script>

<template>
  <router-link to="/">Back</router-link>
  <p class="capitalize">{{ id }}</p>
  <div class="capitalize" v-if="pokemon.active">
    <pokemon-species :species="pokemon.active.species.name" />
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.active.order}.png`"
    />
    <pokemon-info
      :abilities="pokemon.active.abilities"
      :weight="pokemon.active.weight"
      :height="pokemon.active.height"
    />
    <pokemon-stats :stats="pokemon.active.stats" />
  </div>
</template>
