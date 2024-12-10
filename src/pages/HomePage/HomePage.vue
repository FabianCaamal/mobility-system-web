<script setup lang="ts">
import { ref } from 'vue'
import { GetColors } from '@/helpers'
import type { Pagination } from '@/models'
import { CustomTable, TemplateColumn } from '@/components'

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
  <CustomTable title="__lang.title" loading v-model:table-data="data">
    <TemplateColumn title="Nombre" sortable-key="UserName" filter-key="UserName">
      <template #default="{ data }">
        <div class="flex gap-2 items-center">
          <v-avatar :color="GetColors.getRandomColor()" size="small">
            <VImg v-if="data.urlImage !== 'NA' && data?.urlImage" :src="data?.urlImage" />
            <span v-else>{{ data?.username.charAt().toUpperCase() }}</span>
          </v-avatar>

          <span>{{ data?.username }}</span>
        </div>
      </template>
    </TemplateColumn>

    <TemplateColumn title="__lang.ths[1]" sortable-key="Email" filter-key="Email">
      <template #default="{ data }">
        {{ data?.email }}
      </template>
    </TemplateColumn>

    <TemplateColumn title="__lang.ths[2]" sortable-key="Role.Description">
      <template #default="{ data }">
        {{ data?.role?.description }}
      </template>
    </TemplateColumn>

    <TemplateColumn title="__lang.ths[3]" justify="center">
      <template #default="{ data }">
        {{ data?.language }}
      </template>
    </TemplateColumn>
  </CustomTable>
</template>
