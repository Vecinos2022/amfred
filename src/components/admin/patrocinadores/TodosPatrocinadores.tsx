'use client'
import { useEffect, useState } from 'react'
import dayjs from '@/services/daysJsConfig'
import {
  Button,
  Switch,
  Tooltip,
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader
} from '@nextui-org/react'
import { usePatrocinadoresStore } from '@/store/patrocinadores/patrocinadoresSlice'

import { FaEdit, FaTrash } from 'react-icons/fa'

import TableComponent from '../../table/TableComponent'
import { useRouter } from 'next/navigation'
import { PatrocinadorResponse } from '@/types/Patrocinador'

const TodosPatrocinadores = () => {
  const route = useRouter()
  const {
    getPatrocinadores,
    clearActive,
    setActive,
    changeStatusPatrocinador
  } = usePatrocinadoresStore()

  const [rowsActive, setRowsActive] = useState<
    { index: number; key: string }[]
  >([])
  const [rowsInactive, setRowsInactive] = useState<
    { index: number; key: string }[]
  >([])

  useEffect(() => {
    getPatrocinadores()
    clearActive()
  }, [])

  const { patrocinadores } = usePatrocinadoresStore((state) => ({
    patrocinadores: state.patrocinadores
  }))

  const handleEdit = (patrocinador: PatrocinadorResponse) => {
    setActive(patrocinador)
    route.push('agregar_patrocinador')
  }

  useEffect(() => {
    if (patrocinadores.length > 0) {
      setRowsActive(
        patrocinadores
          .filter((patrocinador) => {
            return patrocinador.estatus === true
          })
          .map((patrocinador, index) => ({
            key: patrocinador._id,
            index: index + 1,
            titulo: patrocinador.nombre_patrocinador,
            fecha: dayjs(patrocinador.updatedAt).format('DD/MM/YYYY'),
            acciones: (
              <div className='relative flex items-center gap-2 justify-center'>
                <Tooltip content='Editar' color='foreground' closeDelay={20}>
                  <Button
                    onClick={() => handleEdit(patrocinador)}
                    className='text-lg bg-[#338DF3] text-white cursor-pointer active:opacity-50 active:border-0'
                  >
                    <FaEdit />
                  </Button>
                </Tooltip>

                <Tooltip content='Eliminar' color='foreground' closeDelay={20}>
                  <Button
                    onClick={() => changeStatusPatrocinador(patrocinador._id)}
                    className='text-lg bg-red-700 text-white cursor-pointer active:opacity-50 active:border-0'
                  >
                    <FaTrash />
                  </Button>
                </Tooltip>
              </div>
            )
          }))
      )
      setRowsInactive(
        patrocinadores
          .filter((patrocinador) => {
            return patrocinador.estatus === false
          })
          .map((patrocinador, index) => ({
            key: patrocinador._id,
            index: index + 1,
            titulo: patrocinador.nombre_patrocinador,
            fecha: dayjs(patrocinador.updatedAt).format('DD/MM/YYYY')
          }))
      )
    } else {
      setRowsActive([])
      setRowsInactive([])
    }
  }, [patrocinadores])

  const columns = [
    {
      key: 'index',
      label: '#'
    },
    {
      key: 'titulo',
      label: 'Patrocinador'
    },

    {
      key: 'fecha',
      label: 'Actualizado el'
    },
    {
      key: 'acciones',
      label: 'Acciones'
    }
  ]

  let tabs = [
    {
      id: 'activas',
      label: 'Activas',
      content: (
        <TableComponent
          columns={columns}
          rows={rowsActive}
          showHeader={true}
          linkButton={'/admin/patrocinadores/agregar_patrocinador'}
        />
      )
    },
    {
      id: 'inactivas',
      label: 'Eliminadas',
      content: (
        <TableComponent
          columns={columns.slice(0, -1)}
          rows={rowsInactive}
          showHeader={true}
          linkButton={'/admin/patrocinadores/agregar_patrocinador'}
        />
      )
    }
  ]

  return (
    <Tabs aria-label='Dynamic tabs' items={tabs} className='pt-6'>
      {(item) => (
        <Tab key={item.id} title={item.label}>
          {item.content}
        </Tab>
      )}
    </Tabs>
  )
}

export default TodosPatrocinadores
