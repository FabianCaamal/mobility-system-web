<script lang="ts" setup>
import type { TemplateColumnProps } from '@/models'

const props = defineProps<TemplateColumnProps>()
</script>

<template>
  <slot :data="props.data"></slot>
</template>
