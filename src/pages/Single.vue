<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { single } from "./../api/pokemon";

// reactive state
const route = useRoute();
const pokemon = ref(null); //TO DO: don't need array, need single pokemon

// lifecycle hooks
onMounted(() => {
  single(route.params.name).then((data) => (pokemon.value = data));
});
</script>

<template>
  <p class="capitalize">{{ $route.params.name }}</p>
  <router-link to="/">Back</router-link>
  <p v-if="pokemon">{{ pokemon }}</p>
</template>
