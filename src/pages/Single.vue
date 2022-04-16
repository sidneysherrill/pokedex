<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

const props = defineProps({
  id: String,
});

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchActive(props.id);
});
</script>

<template>
  <p class="capitalize">{{ id }}</p>
  <router-link to="/">Back</router-link>
  <p v-if="pokemon.active">{{ pokemon.active }}</p>
</template>
