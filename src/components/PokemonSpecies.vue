<script setup>
const props = defineProps({
  species: String,
});
</script>

<!-- pokemon.species.active.name -->

<template>
  <h2>Species</h2>
  <p>{{ species }}</p>
</template>
