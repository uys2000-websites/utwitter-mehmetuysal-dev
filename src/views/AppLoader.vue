<template>
  <div class="h-screen w-screen top-0 left-0 flex justify-center fixed">
    <span class="loading loading-infinity loading-lg"></span>
  </div>
</template>
<script lang="ts">
import { useAuthStore } from '@/stores/auth';
import { auth, signOut } from '@/services/auth';
export default {
  data() {
    return {
      authStore: useAuthStore()
    }
  },
  async mounted() {
    await auth.authStateReady()
    if (auth.currentUser) {
      const tokens = await auth.currentUser.getIdTokenResult()
      if (!!tokens.claims.admin) {
        if (this.$route.redirectedFrom?.name) {
          this.authStore.id = auth.currentUser.uid
          this.$router.push({ name: this.$route.redirectedFrom.name })
          return;
        }
      }
      await signOut()
    }
    this.$router.push({ name: 'HomeView' })
  }
}
</script>