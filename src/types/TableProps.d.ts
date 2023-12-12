export interface Column {
  key: string
  label: string
}

export interface TableProps {
  columns: Column[]
  rows: Record<string, any>[]
  linkButton?: string
  showHeader?: boolean
  removeWrapper?: boolean
}
