<script lang="ts" setup>
import type { TemplateColumnProps } from '@/types/components/CustomTableItem'

const props = defineProps<TemplateColumnProps>()
</script>

<template>
  <slot :data="props.data"></slot>
</template>
