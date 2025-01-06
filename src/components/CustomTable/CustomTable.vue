<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { CustomTableProps, Option } from '@/types/components/CustomTable'
import type { TemplateColumnProps } from '@/types/components/CustomTableItem'
import CustomTableHeader from './CustomTableHeader.vue'
import CustomTableTable from './CustomTableTable.vue'
import CustomTablePagination from './CustomTablePagination.vue'

const slots = useSlots()
const emits = defineEmits([
  'onRowClick',
  'onUpdate',
  'update:tableData',
  'onBtnAdd',
  'onClickExcel',
  'onSearch',
])
const props = defineProps<CustomTableProps>()

const columns = computed(() => {
  return (
    slots.default?.().map((children) => {
      return {
        component: children,
        props: children.props as TemplateColumnProps,
      }
    }) || []
  )
})
const filterKeysOpts = computed((): Option[] => {
  const columnsSortables = columns.value.filter(({ props }) => {
    return props?.title && props?.['filter-key']
  })

  return columnsSortables?.map(({ props }) => ({
    label: props?.title!,
    value: props?.['filter-key']!,
  }))
})
const sortKeysOpts = computed((): Option[] => {
  const columnsSortables = columns.value.filter(({ props }) => {
    return props?.title && props?.['sortable-key']
  })

  return columnsSortables?.map(({ props }) => ({
    label: props?.title!,
    value: props?.['sortable-key']!,
  }))
})

const onUpdateTable = () => {
  emits('onUpdate')
}

//<=== Sorting functions ===>
const onChangeSortKey = (key: string) => {
  emits('update:tableData', {
    ...props.tableData,
    sortParam: key,
  })

  onUpdateTable()
}
const onChangeSortAsc = (sort: boolean) => {
  emits('update:tableData', {
    ...props.tableData,
    isDescending: sort,
  })

  onUpdateTable()
}
const onSelectHeaderSort = (key?: string) => {
  if (!key) return

  const isDescending = key === props.tableData.sortParam ? !props.tableData.isDescending : false

  emits('update:tableData', {
    ...props.tableData,
    sortParam: key,
    isDescending,
  })

  onUpdateTable()
}
const getIconSort = (key?: string) => {
  if (key !== props.tableData.sortParam) return 'mdi-sort'

  return props.tableData.isDescending ? 'mdi-sort-descending' : 'mdi-sort-ascending'
}

// <=== Pagination functions ===>
const onNextPage = () => {
  emits('update:tableData', {
    ...props.tableData,
    pageNumber: props.tableData.pageNumber + 1,
  })

  onUpdateTable()
}
const onPrevPage = () => {
  emits('update:tableData', {
    ...props.tableData,
    pageNumber: props.tableData.pageNumber - 1,
  })

  onUpdateTable()
}
const onChangePageSize = (size: number) => {
  emits('update:tableData', {
    ...props.tableData,
    pageSize: size,
    pageNumber: 1,
  })

  onUpdateTable()
}
const onPageNumber = (pageNumber: number) => {
  emits('update:tableData', {
    ...props.tableData,
    pageNumber,
  })

  onUpdateTable()
}
</script>

<template>
  <VSheet class="relative h-100 d-flex flex-col" elevation="4">
    <CustomTableHeader
      :title="props.title"
      :features="props.features"
      :current-sort-key="props.tableData.sortParam"
      :filter-opts="filterKeysOpts"
      :sort-opts="sortKeysOpts"
      :is-descending="props.tableData.isDescending"
      @onBtnAdd="emits('onBtnAdd')"
      @onClickExcel="emits('onClickExcel')"
      @onChangeSearch="$emit('onSearch', $event)"
      @onChangeSortAsc="onChangeSortAsc"
      @onChangeSortKey="onChangeSortKey"
    />

    <CustomTableTable withHover :loading="props.loading" :length-items="props.tableData.items.length">
      <template #tableHeader>
        <tr>
          <template v-for="(column, _index) in columns" :key="_index">
            <th
              v-if="column.component.type"
              class="px-5 py-3"
              :colspan="column.props?.colspan"
              :style="{ 'text-align': column.props?.justify || 'left' }"
            >
              <span
                :class="{ 'sort-hover': column.props?.['sortable-key'] !== undefined }"
                @click="onSelectHeaderSort(column.props?.['sortable-key'])"
              >
                {{ column.props?.title }}

                <template v-if="column.props?.['sortable-key'] !== undefined">
                  <VIcon class="pl-1" :icon="getIconSort(column.props['sortable-key'])" size="x-small" />
                </template>
              </span>
            </th>
          </template>
        </tr>
      </template>

      <template #tableBody>
        <tr
          v-for="(row, rowIndex) in props.tableData.items"
          :key="rowIndex"
          class="border-b relative"
          @click="emits('onRowClick', row)"
        >
          <template v-for="(column, _colIndex) in columns" :key="_colIndex">
            <td
              v-if="column.component.type"
              class="!px-5 !py-[0.7rem]"
              :class="column.props?.class"
              :colspan="column.props?.colspan"
              :style="{ 'text-align': column.props?.justify || 'left' }"
              @click="column.props?.['disable-click'] !== undefined && $event.stopPropagation()"
            >
              <component :is="column.component" :data="row" />
            </td>
          </template>
        </tr>
      </template>
    </CustomTableTable>

    <CustomTablePagination
      :data="props.tableData"
      :loading="props.loading"
      @onNextPage="onNextPage"
      @onPrevPage="onPrevPage"
      @onPageSize="onChangePageSize"
      @onPageNumber="onPageNumber($event)"
    />
  </VSheet>
</template>

<style lang="scss">
.sort-hover {
  cursor: pointer;

  &:hover {
    background-color: #1a191923;
    border-bottom: 1px solid;
  }
}

.hidden-mobile {
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
}
</style>
