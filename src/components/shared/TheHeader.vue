<template>
  <header class="px-4 pt-4 sticky top-0 z-10 flex-shrink-0">
    <div class="bg-neutral text-neutral-content flex justify-between items-center p-4 rounded-box">
      <RouterLink class="btn btn-sm btn-ghost" :to="{ name: 'HomeView' }">
        UTwitter Panel
      </RouterLink>
      <div class="flex gap-2">
        <RouterLink class="btn btn-sm btn-ghost" :to="{ name: 'AboutView' }">
          About
        </RouterLink>
        <template v-if="!authStore.isAuthenticated">
          <a class="btn btn-sm btn-ghost" href="javascript:;" @click="signIn">
            Sign In
          </a>
        </template>
        <template v-else>
          <Dropdown class="dropdown-end">
            <template #title>
              <div class="btn btn-sm btn-ghost">
                Menu
              </div>
            </template>
            <template #content>
              <DropdownContent class="bg-neutral rounded-btn w-max mt-1">
                <div class="flex flex-col">
                  <RouterLink class="btn btn-sm btn-ghost" :to="{ name: 'AppView' }">
                    App
                  </RouterLink>
                  <a class="btn btn-sm btn-ghost" href="javascript:;" @click="signOut">
                    Sign Out
                  </a>
                </div>
              </DropdownContent>
            </template>
          </Dropdown>
        </template>
        <ThemeBtn />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import Dropdown from '../daisy/Dropdown.vue';
import DropdownContent from '../daisy/DropdownContent.vue';
import ThemeBtn from '../daisy/ThemeBtn.vue';
import { useAuthStore } from '@/stores/auth';
import { signIn, signOut } from '@/services/auth';

export default {
  components: { RouterLink, Dropdown, DropdownContent, ThemeBtn },
  data() {
    return {
      authStore: useAuthStore()
    }
  },
  methods: {
    signOut,
    async signIn() {
      const credential = await signIn()
      if (credential.user) {
        const tokens = await credential.user.getIdTokenResult()
        if (!!tokens.claims.admin) {
          this.authStore.id = credential.user.uid;
          this.$router.push({ name: "AppView" })
          return;
        }
        await signOut()
      }
    }
  }
}
</script>