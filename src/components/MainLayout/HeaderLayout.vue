<script lang="ts" setup>
defineEmits(['onDrawer'])
</script>

<template>
  <v-app-bar density="compact">
    <v-app-bar-nav-icon @click="$emit('onDrawer')" />

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
