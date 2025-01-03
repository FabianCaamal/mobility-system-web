import { Pagination } from '@/types'

export interface PropTableData extends Pagination {
  items: unknown[]
}

// Propiedades del componente principal que estructura la card
export type CustomTableProps = {
  title: string
  tableData: PropTableData
  loading?: boolean
  filterOptions?: Option[]
  features?: unknown
}

// Propiedades de las columnas de la tabla y de los ordenamientos
export type TemplateColumnProps = {
  title?: string
  data?: unknown
  class?: string
  colspan?: number
  'disable-click'?: boolean
  'sortable-key'?: string
  'filter-key'?: string
  justify?: 'start' | 'center' | 'end'
}

interface Option {
  label: string
  value: string
}
