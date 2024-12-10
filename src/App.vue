<script setup lang="ts">
import { RouterView } from 'vue-router'
import { MainLayout } from '@/components'
</script>

<template>
  <VApp>
    <MainLayout>
      <RouterView />
    </MainLayout>
  </VApp>
</template>
