<script setup>
const props = defineProps({
  abilities: Array,
  height: Number,
  weight: Number,
});
</script>

<template>
  <article class="bg-white p-6 rounded-lg grid gap-4 lg:grid-cols-3">
    <div>
      <h2 class="font-bold text-xl">Abilities</h2>
      <ul>
        <li v-for="a in props.abilities">{{ a.ability.name }}</li>
      </ul>
    </div>
    <div>
      <h2 class="font-bold text-xl">Weight</h2>
      <p>{{ weight }}</p>
    </div>
    <div>
      <h2 class="font-bold text-xl">Height</h2>
      <p>{{ height }}</p>
    </div>
  </article>
</template>
