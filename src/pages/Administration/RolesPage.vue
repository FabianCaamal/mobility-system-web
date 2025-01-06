<script setup lang="ts">
import { ref } from 'vue'
import { CustomTable, CustomTableItem } from '@/components'
import type { Pagination } from '@/types'

const data = ref<Pagination>({
  hasNextPage: false,
  hasPreviousPage: true,
  items: [],
  pageNumber: 1,
  totalPages: 1,
  totalItems: 1,
  pageSize: 10,
})
</script>

<template>
  <div class="w-full h-full">
    <CustomTable title="Roles" v-model:table-data="data">
      <CustomTableItem title="Nombre" />
      <CustomTableItem title="Descripción" />
      <CustomTableItem title="Está activo" />
    </CustomTable>
  </div>
</template>
