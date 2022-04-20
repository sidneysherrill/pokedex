<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchList();
});
</script>

<template>
  <h1>Pokédex</h1>
  <ol class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <li
      class="capitalize shadow hover:shadow-lg rounded-md p-1"
      v-for="(p, i) in pokemon.list"
    >
      <router-link :to="`/pokemon/${p.name}`">
        <img
          class="w-full"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            i + 1
          }.png`"
          loading="lazy"
          width="100"
          height="100"
        />
        {{ p.name }}</router-link
      >
    </li>
  </ol>
</template>

<style>
.card {
  padding: 10px;
}
</style>
