<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <AppHeader />
      <div class="h-app-page overflow-hidden">
        <RouterView />
      </div>
    </div>
    <AppDrawer />
  </div>
</template>

<script lang="ts">
import AppDrawer from '@/components/shared/AppDrawer.vue';
import AppHeader from '@/components/shared/AppHeader.vue';
import { RouterView } from 'vue-router'
export default {
  components: {
    AppHeader,
    AppDrawer,
    RouterView
  }
}
</script>