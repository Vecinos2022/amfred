'use client'
import { useEffect, useState } from 'react'
import dayjs from '@/services/daysJsConfig'
import { Button, Switch, Tooltip } from '@nextui-org/react'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'

import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'

import TableComponent from '../table/TableComponent'
import { NoticiaFormInputs, NoticiaResponse } from '@/types/Noticia'
import { useRouter } from 'next/navigation'

const TodasNoticias = () => {
  const route = useRouter()
  const { getNoticias, setActive, deleteNoticia } = useNoticiasStore()

  const [rows, setRows] = useState<{ index: number; key: string }[]>([])

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
      setRows(
        noticias.map((noticia, index) => ({
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
      setRows([])
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

  return (
    <TableComponent
      columns={columns}
      rows={rows}
      showHeader={true}
      linkButton={'/admin/agregar_noticia'}
    />
  )
}

export default TodasNoticias
