<script lang="ts" setup>
import { EmptyStateApp } from '@/components'

const props = defineProps<{
  withHover?: boolean
  sortHover?: boolean
  loading?: boolean
  lengthItems: number
}>()
</script>

<template>
  <div class="overflow-auto relative flex-1">
    <table class="w-full text-sm">
      <thead class="sticky -top-1 z-10 text-gray-500 uppercase border-style border-t">
        <slot name="tableHeader"></slot>
      </thead>

      <tbody v-if="!loading" class="body-style" :class="{ 'hover-style-row': props.withHover }">
        <slot name="tableBody"></slot>
      </tbody>
    </table>

    <div v-if="loading" class="w-full h-80 flex justify-center items-center">
      <VProgressCircular indeterminate color="primary" />
    </div>

    <template v-else-if="props.lengthItems === 0">
      <EmptyStateApp />
    </template>
  </div>
</template>

<style lang="scss">
.border-style {
  tr {
    color: #0963b3;
    border-bottom: 2px solid #0963b3;
  }
}

.body-style {
  font-size: 0.85rem;

  td {
    opacity: 80%;
  }
}

.hover-style-row {
  tr {
    cursor: pointer;

    &:hover {
      background-color: var(--color-border-hover);

      td:first-child::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0.25rem;
        height: 100%;
        z-index: 9;
        border-radius: 0px 5px 5px 0px;
        background-color: rgb(132, 132, 133);
      }
    }
  }
}
</style>
