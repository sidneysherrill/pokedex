<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// reactive state
const route = useRoute();
const pokemon = ref(null); //TO DO: don't need array, need single pokemon

// lifecycle hooks
onMounted(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}/`)
    .then((response) => response.json())
    .then((data) => {
      pokemon.value = data; //TO DO: don't need results, need single pokemon
    });
});
</script>

<template>
  <p class="capitalize">{{ $route.params.name }}</p>
  <router-link to="/">Back</router-link>
  <p v-if="pokemon">{{ pokemon }}</p>
</template>
