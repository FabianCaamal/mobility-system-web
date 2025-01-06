<script setup lang="ts">
import { ref } from 'vue'
import HeaderLayout from './HeaderLayout.vue'
import NavigationLayout from './NavigationLayout.vue'

const drawer = ref(false)
</script>

<template>
  <VLayout class="rounded-md">
    <HeaderLayout @on-drawer="drawer = !drawer" />

    <VNavigationDrawer v-model="drawer" expand-on-hover>
      <NavigationLayout />
    </VNavigationDrawer>

    <VMain>
      <VSheet class="h-100 w-100">
        <slot />
      </VSheet>
    </VMain>
  </VLayout>
</template>
