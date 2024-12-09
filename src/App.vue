<script setup lang="ts">
import { RouterView } from 'vue-router'
import { usePrimeVue } from 'primevue/config'
import { MainLayout } from '@/components'

const PrimeVue = usePrimeVue()
PrimeVue.config.ripple = true
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>
