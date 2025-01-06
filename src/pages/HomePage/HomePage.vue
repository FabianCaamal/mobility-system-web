<script setup lang="ts">
import { CreateMap } from '@/helpers'
import { onMounted } from 'vue'

onMounted(() => {
  const mapDiv = document.getElementById('mapDiv')
  CreateMap(mapDiv)
})
</script>

<template>
  <div id="mapDiv" class="w-full h-full">Home</div>
</template>
