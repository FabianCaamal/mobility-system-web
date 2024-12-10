<script setup lang="ts">
import HeaderLayout from './HeaderLayout.vue'
</script>

<template>
  <section class="flex flex-col h-full w-full">
    <HeaderLayout />

    <div class="px-2 pt-3 flex-1 h-dvh dark:text-white text-black font-bold">
      <slot></slot>
    </div>
  </section>
</template>
