<script setup>
import { onMounted } from "vue";
import { useGameStore } from "@/stores/game";

const game = useGameStore();

onMounted(() => {
  game.fetchOptions(4, 898);
});
</script>

<template>
  <h1 class="pb-8 px-4 text-center sm:text-left text-3xl sm:text-4xl">
    Who's that Pokémon?
  </h1>
  <div
    v-if="game.options && game.options.length"
    class="grid md:grid-cols-2 gap-8 items-start"
  >
    <div class="bg-white rounded p-8">
      <img
        class="w-full"
        :class="{ 'brightness-0': !game.show }"
        width="100"
        height="100"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${game.id}.png`"
      />
    </div>
    <ul class="grid gap-4">
      <li v-for="(o, i) in game.options">
        <button
          :disabled="game.submissions.includes(o.id) && game.id !== o.id"
          :class="{
            'bg-white hover:bg-slate-300': !(
              game.submissions.includes(o.id) && game.id !== o.id
            ),
            'bg-red-200': game.submissions.includes(o.id) && game.id !== o.id,
            'bg-emerald-300 hover:bg-emerald-500':
              game.submissions.includes(o.id) && game.id === o.id,
          }"
          class="capitalize pl-4 pr-8 py-4 hover:shadow rounded w-full text-left"
          @click="game.checkAnswer(o.id)"
        >
          <span class="bg-slate-100 py-1 px-2 rounded mr-3">{{ i + 1 }}</span>
          {{ o.forms[0].name }}
        </button>
      </li>
      <li>
        <button
          v-if="game.submittedCorrectAnswer"
          class="bg-white hover:bg-slate-300 pl-4 pr-8 py-4 hover:shadow rounded w-full text-left font-bold text-center"
          @click="game.fetchOptions(4, 898)"
        >
          Play Again
        </button>
      </li>
    </ul>
  </div>
</template>
