<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import PokemonAbilities from "@/components/PokemonAbilities.vue";

const props = defineProps({
  id: String,
});

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchActive(props.id);
});
</script>

<template>
  <pokemon-abilities :abilities="pokemon.active.abilities" />
  <p class="capitalize">{{ id }}</p>
  <router-link to="/">Back</router-link>
  <p v-if="pokemon.active">{{ pokemon.active }}</p>
</template>
