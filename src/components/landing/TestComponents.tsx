'use client'

import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Input } from '@nextui-org/react'

import { useRouter } from 'next/navigation'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import { NoticiaFormInputs } from '@/types/Noticia'

const schema = yup.object().shape({
  _id: yup.string().nullable().notRequired(),
  titulo: yup.string().required('El nombre es obligatorio'),
  descripcion: yup.string().required('El correo es obligatorio'),
  imagen: yup.string().required('La contraseña es obligatoria')
})

const TestComponents = () => {
  const router = useRouter()

  const {
    saveNewNoticia: saveNewNoticia,
    noticiaActive,
    editNoticia: editNoticia
  } = useNoticiasStore()

  const { isLoading } = useNoticiasStore((state) => ({
    isLoading: state.isLoading,
    noticiaActive: state.noticiaActive
  }))

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NoticiaFormInputs>({})

  const onSubmit: SubmitHandler<NoticiaFormInputs> = (data) => {
    noticiaActive ? editNoticia(data, noticiaActive._id) : saveNewNoticia(data)
    router.back()
  }
  return (
    <>
      <form className='px-5 pb-10' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <Input
            isRequired
            isInvalid={errors.titulo ? true : false}
            errorMessage={errors.titulo ? errors.titulo.message : ''}
            type='text'
            {...register('titulo')}
            label='Nombre del usuario'
            defaultValue={noticiaActive?.titulo}
            className='m-2'
          />
        </div>
        <Input
          type='text'
          {...register('descripcion')}
          label='Descripción'
          className='m-2'
          defaultValue={noticiaActive?.descripcion}
        />
        <Input
          type='text'
          {...register('imagen')}
          label='pon ruta plz'
          className='m-2'
          defaultValue={noticiaActive?.imagen}
        />
        <Button
          type='submit'
          variant='solid'
          color='primary'
          className='w-full mt-5'
          isLoading={isLoading}
        >
          Guardar
        </Button>
      </form>
    </>
  )
}

export default TestComponents
