'use client'
import { TableProps } from '@/types/TableProps'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue
} from '@nextui-org/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaFileExcel, FaFilePdf, FaPlus, FaSearch } from 'react-icons/fa'

import exportPDF from './exportPDF'
import exportExcel from './exportExcel'

const TableComponent: React.FC<TableProps> = ({
  columns,
  rows,
  linkButton,
  showHeader = true,
  removeWrapper = false
}) => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const pages = Math.ceil(rows.length / rowsPerPage)

  const router = useRouter()

  const filteredItems = React.useMemo(() => {
    if (!searchTerm) return rows

    return rows.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [rows, searchTerm])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value)
    setPage(1)
  }

  const onClear = React.useCallback(() => {
    setSearchTerm('')
    setPage(1)
  }, [])

  return (
    <Table
      isStriped
      aria-label='Table'
      removeWrapper={removeWrapper}
      hideHeader={rows.length === 0}
      topContent={
        showHeader &&
        (rows.length > 0 || linkButton) && (
          <div className='flex items-center justify-between mb-5 px-1 pt-5'>
            <div className='flex items-center gap-2'>
              <Input
                isClearable
                size='sm'
                className='w-full sm:max-w-[55%]'
                placeholder='Buscar...'
                startContent={<FaSearch />}
                value={searchTerm}
                onClear={() => onClear()}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Dropdown>
                <DropdownTrigger>
                  <Button size='md' variant='flat'>
                    Exportar
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    className='text-foreground'
                    color='success'
                    onClick={() => exportExcel(columns, rows)}
                    startContent={<FaFileExcel />}
                  >
                    Exportar Excel
                  </DropdownItem>
                  <DropdownItem
                    className='text-foreground'
                    color='danger'
                    onClick={() => exportPDF(columns, rows)}
                    startContent={<FaFilePdf />}
                  >
                    Exportar PDF
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {linkButton && (
                <Button
                  variant='solid'
                  color='primary'
                  onPress={() => router.push(linkButton)}
                  startContent={<FaPlus size='20' />}
                >
                  Agregar
                </Button>
              )}
            </div>
            <div className='flex items-center'>
              <span className='text-sm mr-2'>Mostrar:</span>
              <select
                className='px-2 py-1 border rounded focus:outline-none'
                value={rowsPerPage}
                onChange={(e) =>
                  handleRowsPerPageChange(Number(e.target.value))
                }
              >
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={500}>500</option>
              </select>
              <span className='text-sm ml-2'>registros</span>
            </div>
          </div>
        )
      }
      bottomContent={
        <div className='flex w-full justify-center my-5'>
          {rows.length > 0 && (
            <Pagination
              isCompact
              showControls
              showShadow
              color='primary'
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          )}
        </div>
      }
      classNames={{
        wrapper: 'min-h-[222px]'
      }}
    >
      <TableHeader aria-labelledby='prueba'>
        {columns.map((column) => (
          <TableColumn className='text-center' key={column.key}>
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={'No hay información'} items={items}>
        {(item) => (
          <TableRow className='text-center' key={item.key}>
            {(columnKey) => (
              <TableCell className='text-center'>
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default TableComponent
