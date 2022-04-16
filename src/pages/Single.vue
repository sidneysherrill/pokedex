<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePokemonStore } from "@/stores/pokemon";

const pokemon = usePokemonStore();

// reactive state
const route = useRoute();

// lifecycle hooks
onMounted(() => {
  pokemon.fetchActive(route.params.name);
});
</script>

<template>
  <p class="capitalize">{{ $route.params.name }}</p>
  <router-link to="/">Back</router-link>
  <p v-if="pokemon.active">{{ pokemon.active }}</p>
</template>
