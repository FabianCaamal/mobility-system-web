<template>
  <VList>
    <VListItem
      title="Andre Nic"
      subtitle="andrew69@gmailcom"
      prepend-avatar="https://elcomercio.pe/resizer/v2/BKMKUIDFJBHV7IDCWOMUCAZHEA.jpg?auth=844c58e4b5306044cdc3cce69908805971ceb04647607a8db144bfccbd18ebe0&width=1200&height=810&quality=90&smart=true"
    />
  </VList>

  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
  </v-list>
</template>
