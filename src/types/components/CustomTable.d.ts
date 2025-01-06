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

interface Option {
  label: string
  value: string
}
