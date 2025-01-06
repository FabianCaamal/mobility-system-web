import { defineAsyncComponent } from 'vue'

import MainLayout from './MainLayout/MainLayout.vue'
import CustomTable from './CustomTable/CustomTable.vue'
import CustomTableItem from './CustomTableItem/CustomTableItem.vue'

const EmptyStateApp = defineAsyncComponent(() => import('./EmptyStateApp/EmptyStateApp.vue'))

export { MainLayout, CustomTable, CustomTableItem, EmptyStateApp }
