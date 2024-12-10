export type Pagination = {
  hasNextPage: boolean
  hasPreviousPage: boolean
  isDescending?: boolean
  nextPage?: number
  previousPage?: number
  pageNumber: number
  pageSize: number
  sortParam?: string
  totalItems: number
  totalPages: number
  items: unknown[]
}
