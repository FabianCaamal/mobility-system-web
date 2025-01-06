// Propiedades de las columnas de la tabla y de los ordenamientos
export type TemplateColumnProps = {
  title?: string
  data?: any
  class?: string
  colspan?: number
  'disable-click'?: boolean
  'sortable-key'?: string
  'filter-key'?: string
  justify?: 'start' | 'center' | 'end'
}
