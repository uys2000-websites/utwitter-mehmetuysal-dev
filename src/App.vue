<template>
  <router-view v-slot="{ Component }">
    <transition name="layout">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { auth, signOut } from './services/auth';
import { useAuthStore } from './stores/auth';
export default {
  components: {
    RouterView
  },
  data() {
    return {
      authStore: useAuthStore()
    }
  },
  mounted() {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const tokens = await user.getIdTokenResult()
        if (!!tokens.claims.admin) {
          this.authStore.id = user.uid
          return;
        }
        await signOut()
      }
      this.authStore.id = null
      if (this.$route.meta.authReqired)
        this.$router.push({ name: 'HomeView' })
    })
  }
}
</script>


<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>