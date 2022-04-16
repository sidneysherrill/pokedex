<script setup>
import { ref, onMounted } from "vue";
import { index } from "./../api/pokemon";

// reactive state

const pokemon = ref([]);

// lifecycle hooks
onMounted(() => {
  index().then((data) => (pokemon.value = data));
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
