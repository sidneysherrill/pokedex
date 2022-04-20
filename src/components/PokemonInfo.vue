<script setup>
const props = defineProps({
  abilities: Array,
  height: Number,
  weight: Number,
});
</script>

<template>
  <h2>Abilities</h2>
  <ul>
    <li v-for="a in props.abilities">{{ a.ability.name }}</li>
  </ul>
  <h2>Weight</h2>
  <p>{{ weight }}</p>
  <h2>Height</h2>
  <p>{{ height }}</p>
</template>
