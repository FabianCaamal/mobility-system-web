<script setup lang="ts">
import type { PropTableData } from '@/types/components/CustomTable'

defineEmits(['onNextPage', 'onPrevPage', 'onPageSize', 'onPageNumber'])
const props = defineProps<{
  data: PropTableData
  loading: boolean
}>()
</script>

<template>
  <div class="flex items-center justify-between !p-3 text-xs">
    <div>{{ props.data.totalItems }} records</div>

    <div class="flex flex-row-reverse gap-5">
      <div class="hidden-mobile">
        <div class="flex items-end gap-2">
          <span class="pb-1"> rows per page </span>
          <VSelect
            variant="underlined"
            width="55"
            :items="[10, 20, 30, 40, 50]"
            :model-value="props.data.pageSize"
            @update:model-value="$emit('onPageSize', $event)"
          />
        </div>
      </div>

      <div class="flex items-center gap-2">
        <VBtn
          size="small"
          variant="tonal"
          color="primary"
          prepend-icon="mdi-chevron-left"
          :disabled="!props.data.hasPreviousPage || props.loading"
          @click="$emit('onPrevPage')"
        />

        <div>
          <VMenu>
            <template #activator="{ props: propsMenu }">
              <span v-bind="propsMenu" class="hover:underline cursor-pointer">
                <b>{{ props.data.pageNumber }}</b> / {{ props.data.totalPages }}
              </span>
            </template>

            <VList style="max-height: 15rem">
              <VListItem
                v-for="page in props.data.totalPages"
                :key="page"
                class="px-5"
                @click="$emit('onPageNumber', page)"
              >
                <VListItemTitle>{{ page }}</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </div>

        <VBtn
          size="small"
          color="primary"
          variant="tonal"
          prepend-icon="mdi-chevron-right"
          :disabled="!props.data.hasNextPage || props.loading"
          @click="$emit('onNextPage')"
        />
      </div>
    </div>
  </div>
</template>
