import dayjs from '@/services/daysJsConfig'
import { Tooltip } from '@nextui-org/react'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'

import TableComponent from '../table/TableComponent'
import Link from 'next/link'

const EmpleadosTableDashboard = () => {
  const columns = [
    {
      key: 'index',
      label: '#'
    },
    {
      key: 'nombre',
      label: 'Nombre'
    },

    {
      key: 'fecha',
      label: 'Fecha'
    },
    {
      key: 'acciones',
      label: 'Acciones'
    }
  ]

  const data = [
    {
      key: 1,
      index: 1,
      nombre: 'Empleado Prueba Uno',
      fecha: dayjs().format('DD/MM/YYYY'),
      acciones: (
        <div className='relative flex items-center gap-2 justify-center'>
          <Tooltip content='Detalles' color='foreground' closeDelay={20}>
            <Link href='asistencias/permisos-justificaciones' className='text-lg text-default-400 cursor-pointer active:opacity-50 active:border-0'>
              <FaEye />
            </Link>
          </Tooltip>
        </div>
      )
    },
    {
      key: 2,
      index: 2,
      nombre: 'Empleado Prueba Uno',
      fecha: dayjs().format('DD/MM/YYYY'),
      acciones: (
        <div className='relative flex items-center gap-2 justify-center'>
          <Tooltip content='Detalles' color='foreground' closeDelay={20}>
            <Link href='asistencias/permisos-justificaciones' className='text-lg text-default-400 cursor-pointer active:opacity-50 active:border-0'>
              <FaEye />
            </Link>
          </Tooltip>
        </div>
      )
    },
    {
      key: 3,
      index: 3,
      nombre: 'Empleado Prueba Uno',
      fecha: dayjs().format('DD/MM/YYYY'),
      acciones: (
        <div className='relative flex items-center gap-2 justify-center'>
          <Tooltip content='Detalles' color='foreground' closeDelay={20}>
            <Link href='asistencias/permisos-justificaciones' className='text-lg text-default-400 cursor-pointer active:opacity-50 active:border-0'>
              <FaEye />
            </Link>
          </Tooltip>
        </div>
      )
    }
  ]

  return <TableComponent columns={columns} rows={data} showHeader={false} removeWrapper />
}

export default EmpleadosTableDashboard
