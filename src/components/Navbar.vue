<script setup></script>

<template>
  <ul class="navbar flex justify-end gap-4 p-4 font-bold">
    <li>
      <router-link class="px-3 py-1 rounded" to="/"> List </router-link>
    </li>
    <li>
      <router-link class="px-3 py-1 rounded" to="/favorites">
        Favorites
      </router-link>
    </li>
    <li>
      <router-link class="px-3 py-1 rounded" to="/about"> About </router-link>
    </li>
  </ul>
</template>

<style lang="postcss">
.navbar .router-link-active {
  @apply bg-black text-white;
}
</style>
