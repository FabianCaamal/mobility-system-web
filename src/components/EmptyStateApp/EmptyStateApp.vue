<template>
  <VEmptyState image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png">
    <template #title>
      <div class="text-subtitle-2 mt-8">Manage your inventory transfers</div>
    </template>

    <template #text>
      <div class="text-caption">Track and receive your incoming inventory from suppliers</div>
    </template>

    <template #actions>
      <VBtn
        class="text-none"
        color="primary"
        elevation="1"
        rounded="lg"
        size="small"
        text="Agregar"
        width="96"
      />
    </template>
  </VEmptyState>
</template>
