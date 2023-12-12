import { TableProps } from '@/types/TableProps'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { autoTable } from 'jspdf-autotable'

type ExtendedJsPDF = jsPDF & {
  autoTable: autoTable
}

const exportPDF = (columns: TableProps['columns'], rows: TableProps['rows'], fileName: string = 'file') => {
  const doc = new jsPDF() as ExtendedJsPDF

  const filteredColumns = columns.filter((column) => column.label !== 'Acciones')

  const header = filteredColumns.map((column) => column.label)
  const tableData = rows.map((row) => filteredColumns.map((column) => row[column.key]))

  doc.autoTable({
    head: [header],
    body: tableData
  })

  doc.save(`${fileName}.pdf`)
}

export default exportPDF
