<template>
  <div class="h-screen bg-base-300">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script lang="ts">
import TheHeader from '@/components/shared/TheHeader.vue';
import { RouterView } from 'vue-router'
export default {
  components: {
    TheHeader,
    RouterView
  }
}
</script>