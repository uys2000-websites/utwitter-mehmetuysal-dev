<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="drawer-side z-10">
    <label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-neutral min-h-full w-max p-4">
      <!-- Sidebar content here -->
      <li>
        <RouterLink :to="{ name: 'AppView' }" class="btn btn-neutral">App</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  components: { RouterLink }
}
</script>