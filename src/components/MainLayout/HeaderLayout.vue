<script lang="ts" setup>
defineEmits(['onDrawer'])
</script>

<template>
  <v-app-bar density="compact">
    <!-- <v-app-bar-nav-icon @click="$emit('onDrawer')" /> -->

    <v-toolbar-title>Mobility system web</v-toolbar-title>

    <v-spacer></v-spacer>

    <VBtn icon="mdi-magnify" />

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
