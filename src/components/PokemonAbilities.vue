<script setup>
const props = defineProps({
  abilities: Array,
});
</script>

<template>
  <p>{{ props.abilities }}</p>
</template>
