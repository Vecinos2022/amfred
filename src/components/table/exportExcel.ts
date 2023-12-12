import * as XLSX from 'xlsx'
import { TableProps } from '@/types/TableProps'

const exportExcel = (columns: TableProps['columns'], rows: TableProps['rows'], fileName: string = 'file') => {
  const filteredColumns = columns.filter((column) => column.label !== 'Acciones')

  const worksheet = XLSX.utils.json_to_sheet(
    rows.map((row) => {
      const filteredRow: any = {}
      filteredColumns.forEach((column) => {
        filteredRow[column.label] = row[column.key]
      })
      return filteredRow
    })
  )

  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

  XLSX.writeFile(workbook, `${fileName}.xlsx`)
}

export default exportExcel
