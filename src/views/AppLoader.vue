<template>
  <div class="w-full h-full flex justify-center">
    <span class="loading loading-infinity loading-lg"></span>
  </div>
</template>
<script lang="ts">
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
      authStore: useAuthStore()
    }
  },
  mounted() {
    // Auth Control Simulation
    setTimeout(() => {
      if (this.$route.redirectedFrom?.name) {
        this.authStore.id = "userid"
        this.$router.push({ name: this.$route.redirectedFrom.name })
      }
    }, 1000);
  }
}
</script>