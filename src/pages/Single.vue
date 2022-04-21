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
  <p class="capitalize text-4xl py-8 px-4">
    {{ pokemon.active?.forms[0].name }}
  </p>
  <div
    class="capitalize font-mono p-4 bg-lime-200 grid md:grid-cols-2 gap-8 rounded-lg"
    v-if="pokemon.active"
  >
    <div class="md:order-last">
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
