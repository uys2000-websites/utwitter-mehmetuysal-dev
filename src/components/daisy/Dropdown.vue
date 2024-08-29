<template>
  <div class="dropdown">
    <div tabindex="0">
      <slot name="title" />
    </div>
    <slot name="content" />
  </div>
</template>

<script lang="ts">
export default {
}
</script>