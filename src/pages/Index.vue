<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchList();
});
</script>

<template>
  <div>
    <h1
      class="capitalize text-3xl sm:text-4xl pb-8 px-4 text-center sm:text-left"
    >
      Pokédex
    </h1>
    <div>
      <ol class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <li
          class="capitalize font-mono hover:italic hover:font-bold shadow hover:shadow-lg rounded-md p-1 bg-amber-200 hover:bg-amber-300"
          v-for="p in pokemon.list"
        >
          <router-link :to="`/pokemon/${p.id}`">
            <img
              class="w-full"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`"
              loading="lazy"
              width="100"
              height="100"
            />
            <span class="px-1.5">
              {{ p.name }}
            </span>
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>
