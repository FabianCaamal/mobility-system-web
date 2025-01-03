<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { Option } from '@/types/components/CustomTable'

enum SortEnum {
  ASC = 0,
  DESC = 1,
}

const emits = defineEmits([
  'onChangeSortAsc',
  'onChangeSortKey',
  'onBtnAdd',
  'onClickExcel',
  'onChangeSearch',
])
const props = defineProps<{
  title?: string
  currentFilterValue?: string
  currentSortKey?: string
  sortOpts?: Option[]
  filterOpts: Option[]
  isDescending?: boolean
}>()

const searchInput = ref('')
const filterKeySelected = ref('')
const sortKeyValue = computed({
  get() {
    return props.currentSortKey || ''
  },
  set(value) {
    emits('onChangeSortKey', value)
  },
})
const sortAscValue = computed({
  get() {
    return props.isDescending ? SortEnum.DESC : SortEnum.ASC
  },
  set(value) {
    emits('onChangeSortAsc', value === SortEnum.DESC)
  },
})
const placeholderInput = computed(() => {
  const filter = props.filterOpts.find((f) => f.value === filterKeySelected.value)
  return `Buscar por ${filter?.label?.toLowerCase() || 'nombre'}`
})

watch(searchInput, (value) => {
  emits('onChangeSearch', {
    value,
    propertyName: filterKeySelected.value,
  })
})
watch(filterKeySelected, (propertyName: string) => {
  emits('onChangeSearch', {
    propertyName,
    value: searchInput.value,
  })
})

onMounted(() => {
  filterKeySelected.value = props.filterOpts[0]?.value || ''
})
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-2 !p-3 mb-2">
    <div class="p-3 text-2xl">
      {{ props.title }}
    </div>

    <div class="w-4/6 md:w-1/3">
      <VTextField v-model:text="searchInput" :placeholder="placeholderInput" rounded="xl">
        <template #append-inner>
          <VMenu v-if="props.filterOpts.length > 1">
            <template #activator="{ props }">
              <VBtn v-bind="props" icon="mdi-tune-vertical" variant="text" />
            </template>

            <VSheet>
              <h1 class="text-lg p-2 border-b bg-gray-100">Buscar por</h1>

              <v-radio-group v-model="filterKeySelected" color="primary" hide-details class="px-2">
                <template v-for="item in props.filterOpts" :key="item.value">
                  <v-radio :label="item.label" :value="item.value" />
                </template>
              </v-radio-group>
            </VSheet>
          </VMenu>
        </template>
      </VTextField>
    </div>

    <div class="flex justify-end gap-1">
      <VBtn
        height="2rem"
        color="primary"
        size="small"
        append-icon="mdi-plus"
        text="Agregar"
        @click="emits('onBtnAdd')"
      />

      <VMenu :close-on-content-click="false">
        <template #activator="{ props }">
          <VBtn v-bind="props" height="2rem" size="small" icon="mdi-swap-vertical" />
        </template>

        <VSheet class="py-1 px-3">
          <v-radio-group v-model="sortKeyValue" hide-details color="primary" class="border-b">
            <template v-for="sort in props.sortOpts" :key="sort.key">
              <v-radio :label="sort.label" :value="sort.value" />
            </template>
          </v-radio-group>

          <v-radio-group hide-details v-model="sortAscValue" color="primary">
            <v-radio label="A-Z" :value="SortEnum.ASC" />
            <v-radio label="Z-A" :value="SortEnum.DESC" />
          </v-radio-group>
        </VSheet>
      </VMenu>
    </div>
  </div>
</template>
