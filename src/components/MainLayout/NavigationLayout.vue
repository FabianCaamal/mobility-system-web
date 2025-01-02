<script setup lang="ts">
import { computed } from 'vue'

const navigationList = computed(() => [
  {
    title: 'Home',
    icon: 'mdi-home',
    path_name: 'home',
  },
  {
    title: 'Admin',
    icon: 'mdi-shield-crown',
    children: [
      {
        title: 'Users',
        icon: 'mdi-account-multiple',
        path_name: 'admin-users',
      },
      {
        title: 'Roles',
        icon: 'mdi-account-multiple',
        path_name: 'admin-roles',
      },
    ],
  },
  {
    title: 'Management',
    icon: 'mdi-star',
    path_name: 'home',
  },
])
</script>

<template>
  <VList>
    <VListItem
      title="Andre Nic"
      subtitle="andrew69@gmailcom"
      prepend-avatar="https://elcomercio.pe/resizer/v2/BKMKUIDFJBHV7IDCWOMUCAZHEA.jpg?auth=844c58e4b5306044cdc3cce69908805971ceb04647607a8db144bfccbd18ebe0&width=1200&height=810&quality=90&smart=true"
    />
  </VList>

  <v-divider />

  <v-list class="pa-0" nav>
    <template v-for="(item, _idx) in navigationList" :key="_idx">
      <v-list-item
        v-if="!item.children"
        color="primary"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="{ name: item.path_name }"
      />

      <VListGroup v-else>
        <template #activator="{ props }">
          <VListItem v-bind="props" :prepend-icon="item.icon" color="primary" :title="item.title" />
        </template>

        <template v-for="(subItem, _index) in item.children" :key="_index">
          <VListItem :title="subItem.title" :to="{ name: subItem.path_name }" />
        </template>
      </VListGroup>
    </template>
  </v-list>
</template>
