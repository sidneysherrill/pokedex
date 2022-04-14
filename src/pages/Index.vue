<script setup>
import { ref, onMounted } from "vue";

// reactive state

const pokemon = ref([]);

// lifecycle hooks
onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000")
    .then((response) => response.json())
    .then((data) => {
      pokemon.value = data.results;
    });
});
</script>

<template>
  <h1>Pokédex</h1>
  <ol>
    <li class="capitalize" v-for="p in pokemon">
      <router-link :to="`/pokemon/${p.name}`">{{ p.name }}</router-link>
    </li>
  </ol>
</template>

<style></style>
