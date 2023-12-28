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
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'
import AdminCard from '../shared/AdminCard'

import { FaEdit, FaTrash } from 'react-icons/fa'

import TableComponent from '../table/TableComponent'
import { NoticiaFormInputs, NoticiaResponse } from '@/types/Noticia'
import { useRouter } from 'next/navigation'

const TodasNoticias = () => {
  const route = useRouter()
  const { getNoticias, setActive, deleteNoticia } = useNoticiasStore()

  const [rowsActive, setRowsActive] = useState<
    { index: number; key: string }[]
  >([])
  const [rowsInactive, setRowsInactive] = useState<
    { index: number; key: string }[]
  >([])

  useEffect(() => {
    getNoticias()
    // setActive()
  }, [])

  const { noticias } = useNoticiasStore((state) => ({
    noticias: state.noticias
  }))

  const handleEdit = (noticia: NoticiaResponse) => {
    setActive(noticia)
    route.push('agregar_noticia')
  }

  useEffect(() => {
    if (noticias.length > 0) {
      setRowsActive(
        noticias
          .filter((noticia) => {
            return noticia.estatus === true
          })
          .map((noticia, index) => ({
            key: noticia._id,
            index: index + 1,
            titulo: noticia.titulo,
            fecha: dayjs(noticia.updatedAt).format('DD/MM/YYYY'),
            acciones: (
              <div className='relative flex items-center gap-2 justify-center'>
                <Tooltip content='Editar' color='foreground' closeDelay={20}>
                  <Button
                    onClick={() => handleEdit(noticia)}
                    className='text-lg bg-[#338DF3] text-white cursor-pointer active:opacity-50 active:border-0'
                  >
                    <FaEdit />
                  </Button>
                </Tooltip>

                <Switch
                  isSelected={noticia.estatus}
                  onValueChange={() => deleteNoticia(noticia._id)}
                  // onChange={(e) => alert(e.target.value)}
                ></Switch>

                <Tooltip content='Eliminar' color='foreground' closeDelay={20}>
                  <Button
                    onClick={() => handleEdit(noticia)}
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
        noticias
          .filter((noticia) => {
            return noticia.estatus === false
          })
          .map((noticia, index) => ({
            key: noticia._id,
            index: index + 1,
            titulo: noticia.titulo,
            fecha: dayjs(noticia.updatedAt).format('DD/MM/YYYY'),
            acciones: (
              <div className='relative flex items-center gap-2 justify-center'>
                <Tooltip content='Editar' color='foreground' closeDelay={20}>
                  <Button
                    onClick={() => handleEdit(noticia)}
                    className='text-lg text-default-400 cursor-pointer active:opacity-50 active:border-0'
                  >
                    <FaEdit />
                  </Button>
                </Tooltip>

                <Switch
                  isSelected={noticia.estatus}
                  onValueChange={() => deleteNoticia(noticia._id)}
                  // onChange={(e) => alert(e.target.value)}
                ></Switch>
              </div>
            )
          }))
      )
    } else {
      setRowsActive([])
      setRowsInactive([])
    }
  }, [noticias])

  const columns = [
    {
      key: 'index',
      label: '#'
    },
    {
      key: 'titulo',
      label: 'Título'
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
      label: 'Noticias Activas',
      content: (
        <TableComponent
          columns={columns}
          rows={rowsActive}
          showHeader={true}
          linkButton={'/admin/agregar_noticia'}
        />
      )
    },
    {
      id: 'inactivas',
      label: 'Noticias Inactivas',
      content: (
        <TableComponent
          columns={columns}
          rows={rowsInactive}
          showHeader={true}
          linkButton={'/admin/agregar_noticia'}
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

export default TodasNoticias
