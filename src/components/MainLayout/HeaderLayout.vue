<script lang="ts" setup>
defineEmits(['onDrawer'])
</script>

<template>
  <v-app-bar density="compact">
    <v-app-bar-nav-icon variant="text" elevation="0" @click="$emit('onDrawer')" />

    <v-toolbar-title>Mobility system web</v-toolbar-title>

    <v-spacer></v-spacer>

    <VBtn icon="mdi-bell" elevation="0" />

    <VMenu>
      <template #activator="{ props }">
        <VBtn icon="mdi-dots-vertical" elevation="0" v-bind="props" />
      </template>

      <VList>
        <VListItem title="Theme" />
      </VList>
    </VMenu>
  </v-app-bar>
</template>
