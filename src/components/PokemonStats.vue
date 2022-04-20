<script setup>
const props = defineProps({
  stats: Array,
});
</script>

<template>
  <article class="bg-white p-6 rounded-lg">
    <h2 class="font-bold text-xl">Stats</h2>
    <ul class="grid grid-cols-6 gap-1">
      <li v-for="s in props.stats">
        <ul class="flex flex-col-reverse">
          <li
            v-for="i in 15"
            :key="i"
            class="h-2 bg-slate-100 mb-1"
            :class="{ 'bg-emerald-300': s.base_stat >= i * 15 }"
          ></li>
        </ul>
        <p class="text-center text-xs font-bold">
          {{ s.stat.name.replace("-", " ") }}
        </p>
      </li>
    </ul>
  </article>
</template>
