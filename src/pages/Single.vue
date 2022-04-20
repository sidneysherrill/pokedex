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
  <div class="mx-6 mt-6">
    <router-link
      class="border-2 border-black rounded-lg px-3.5 py-1 bg-slate-300 hover:bg-slate-400 float-right"
      to="/"
      >Back</router-link
    >
  </div>
  <p class="capitalize text-4xl my-6 mx-4 font-mono">
    {{ pokemon.active?.forms[0].name }}
  </p>
  <div
    class="capitalize font-mono p-8 border-8 bg-lime-200 grid md:grid-cols-2 gap-8"
    v-if="pokemon.active"
  >
    <div>
      <pokemon-species :species="pokemon.active.species.name" />
      <pokemon-info
        :abilities="pokemon.active.abilities"
        :weight="pokemon.active.weight"
        :height="pokemon.active.height"
      />
      <pokemon-stats :stats="pokemon.active.stats" />
    </div>
    <div>
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`"
      />
    </div>
  </div>
</template>
