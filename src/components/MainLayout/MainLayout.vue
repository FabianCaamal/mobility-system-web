<script setup lang="ts">
import { ref } from 'vue'
import HeaderLayout from './HeaderLayout.vue'
import NavigationLayout from './NavigationLayout.vue'

const drawer = ref(false)
</script>

<template>
  <v-layout class="rounded rounded-md">
    <HeaderLayout @on-drawer="drawer = !drawer" />

    <v-navigation-drawer v-model="drawer" expand-on-hover>
      <NavigationLayout />
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
