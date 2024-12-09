<script setup lang="ts">
import NavigationLayout from './NavigationLayout.vue'
</script>

<template>
  <div class="card w-full h-10 p-2 border-b-white">
    <section class="flex justify-between w-full">
      <NavigationLayout />

      <div class="flex items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        <Avatar
          image="https://elcomercio.pe/resizer/v2/BKMKUIDFJBHV7IDCWOMUCAZHEA.jpg?auth=844c58e4b5306044cdc3cce69908805971ceb04647607a8db144bfccbd18ebe0&width=1200&height=810&quality=90&smart=true"
          shape="circle"
        />
      </div>
    </section>
  </div>
</template>
