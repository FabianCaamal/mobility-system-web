import { defineAsyncComponent } from 'vue'

import MainLayout from './MainLayout/MainLayout.vue'
import CustomTable from './CustomTable/CustomTable.vue'
import TemplateColumn from './TemplateColumn/TemplateColumn.vue'

const EmptyStateApp = defineAsyncComponent(() => import('./EmptyStateApp/EmptyStateApp.vue'))

export { MainLayout, CustomTable, TemplateColumn, EmptyStateApp }
