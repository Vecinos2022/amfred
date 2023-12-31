'use client'

import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Image, Input } from '@nextui-org/react'

import { useRouter } from 'next/navigation'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import { NoticiaFormInputs } from '@/types/Noticia'
import AdminCard from '../../shared/AdminCard'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const schema = yup.object().shape({
  _id: yup.string().nullable().notRequired(),
  titulo: yup.string().required('El nombre es obligatorio'),
  descripcion_corta: yup
    .string()
    .required('La descripción corta es obligatoria'),
  imagen: yup.mixed().required('La imagen es obligatoria')
})

const FormNoticia = () => {
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

  const onSubmit: SubmitHandler<NoticiaFormInputs> = async (data) => {
    data.descripcion = content
    noticiaActive
      ? await editNoticia(data, noticiaActive._id).then(() => router.back())
      : await saveNewNoticia(data).then(() => router.back())
  }
  const [content, setContent] = useState(
    noticiaActive ? noticiaActive.descripcion : ''
  )

  const handleContentChange = (value: string) => {
    setContent(value)
  }
  return (
    <AdminCard backBtn>
      <form className='px-5 pb-10' onSubmit={handleSubmit(onSubmit)}>
        <Input
          isRequired
          isInvalid={errors.titulo ? true : false}
          errorMessage={errors.titulo ? errors.titulo.message : ''}
          type='text'
          {...register('titulo')}
          label='Titulo de la noticia'
          defaultValue={noticiaActive?.titulo}
          className='m-2'
        />

        <Input
          type='text'
          {...register('descripcion_corta')}
          label='Descripción Corta'
          className='m-2'
          defaultValue={noticiaActive?.descripcion_corta}
        />

        {/* <Input
          type='text'
          {...register('imagen')}
          label='pon ruta plz'
          className='m-2'
          defaultValue={noticiaActive?.imagen}
        /> */}
        <ReactQuill
          className='h-[300px] py-10'
          theme='snow'
          value={content}
          onChange={handleContentChange}
        />

        <input
          type='file'
          className='form-control py-10'
          {...register('imagen')}
          placeholder='Imagen'
        />
        <Image
          src={noticiaActive?.imagen}
          width={300}
          alt={noticiaActive?.imagen}
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
    </AdminCard>
  )
}

export default FormNoticia
