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
  <ol>
    <li class="capitalize" v-for="p in pokemon.list">
      <router-link :to="`/pokemon/${p.name}`">{{ p.name }}</router-link>
    </li>
  </ol>
</template>

<style></style>
