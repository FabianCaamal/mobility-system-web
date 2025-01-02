<script lang="ts" setup>
defineEmits(['onDrawer'])
</script>

<template>
  <v-app-bar density="compact">
    <v-app-bar-nav-icon variant="text" @click="$emit('onDrawer')" />

    <v-toolbar-title>Mobility system web</v-toolbar-title>

    <v-spacer></v-spacer>

    <VBtn icon="mdi-bell" />
  </v-app-bar>
</template>
