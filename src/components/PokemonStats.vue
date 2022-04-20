<script setup>
const props = defineProps({
  stats: Array,
});
</script>

<template>
  <h2>Stats</h2>
  <ul>
    <li v-for="s in props.stats">
      {{ s.stat.name }}: {{ s.base_stat }} {{ s.effort }}
    </li>
  </ul>
</template>
