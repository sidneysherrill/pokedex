<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

const pokemon = usePokemonStore();

onMounted(() => {
  pokemon.fetchList();
});
</script>

<template>
  <div class="bg-slate-200">
    <h1 class="text-4xl py-8 px-4 font-family">Pokédex</h1>
    <div>
      <ol class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <li
          class="capitalize font-mono hover:italic hover:font-bold shadow hover:shadow-lg rounded-md p-1 bg-amber-200 hover:bg-amber-300"
          v-for="(p, i) in pokemon.list"
        >
          <router-link :to="`/pokemon/${i + 1}`">
            <img
              class="w-full"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                i + 1
              }.png`"
              loading="lazy"
              width="100"
              height="100"
            />
            {{ p.name }}</router-link
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<style>
.card {
  padding: 10px;
}
</style>
