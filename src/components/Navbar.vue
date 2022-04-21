<script setup></script>

<template>
  <ul
    class="navbar flex justify-center sm:justify-end gap-2 p-4 font-bold text-xs sm:text-base"
  >
    <li>
      <router-link class="px-3 py-1 rounded" to="/"> List </router-link>
    </li>
    <li>
      <router-link class="px-3 py-1 rounded" to="/favorites">
        Favorites
      </router-link>
    </li>
    <li>
      <router-link class="px-3 py-1 rounded" to="/game"> Game </router-link>
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
