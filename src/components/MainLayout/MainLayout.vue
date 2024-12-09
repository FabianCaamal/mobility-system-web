<script setup lang="ts">
import HeaderLayout from './HeaderLayout.vue'
</script>

<template>
  <section class="flex flex-column h-full w-full">
    <HeaderLayout />

    <div class="px-2 pt-3 flex-1 h-dvh">
      <slot></slot>
    </div>
  </section>
</template>
