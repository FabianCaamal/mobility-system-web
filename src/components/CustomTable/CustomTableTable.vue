<script lang="ts" setup>
// import { TrackmeEmptyState } from '@common/components'

const props = defineProps<{
  withHover?: boolean
  sortHover?: boolean
  loading?: boolean
  lengthItems: number
}>()
</script>

<template>
  <div class="overflow-auto relative" style="max-height: calc(100vh - 17rem)">
    <table class="w-full text-sm text-gray-600">
      <thead class="sticky -top-1 z-10 text-gray-500 bg-gray-100 uppercase border-style border-t">
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
      <div class="py-24">empty</div>
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

  // tr:nth-child(odd) {
  //   background-color: #e4eaf06a;
  // }
}

.hover-style-row {
  tr {
    cursor: pointer;

    &:hover {
      background-color: #a2c4ec5c;

      td:first-child::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0.25rem;
        height: 100%;
        z-index: 9;
        border-radius: 0px 5px 5px 0px;
        background-color: rgb(88, 135, 245);
      }
    }
  }
}
</style>
