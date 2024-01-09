'use client'

import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Image, Input } from '@nextui-org/react'

import { useRouter } from 'next/navigation'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'
import { usePatrocinadoresStore } from '@/store/patrocinadores/patrocinadoresSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import { NoticiaFormInputs } from '@/types/Noticia'
import { PatrocinadorFormInputs } from '@/types/Patrocinador'
import AdminCard from '../../shared/AdminCard'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const schema = yup.object().shape({
  _id: yup.string().nullable().notRequired(),
  nombre_patrocinador: yup.string().required('El nombre es obligatorio'),
  sitio_web: yup.string().required('La descripción corta es obligatoria'),
  direccion: yup.string().required('El nombre es obligatorio'),
  telefono: yup.string().required('El nombre es obligatorio'),
  imagen: yup.mixed().required('La imagen es obligatoria')
})

const FormPatrocinadores = () => {
  const router = useRouter()

  const {
    saveNewPatrocinador: saveNewPatrocinador,
    patrocinadorActive,
    editPatrocinador: editPatrocinador
  } = usePatrocinadoresStore()

  const { isLoading } = usePatrocinadoresStore((state) => ({
    isLoading: state.isLoading,
    patrocinadorActive: state.patrocinadorActive
  }))

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PatrocinadorFormInputs>({})

  const onSubmit: SubmitHandler<PatrocinadorFormInputs> = async (data) => {
    data.descripcion = content
    patrocinadorActive
      ? await editPatrocinador(data, patrocinadorActive._id).then(() =>
          router.back()
        )
      : await saveNewPatrocinador(data).then(() => router.back())
  }
  const [content, setContent] = useState(
    patrocinadorActive ? patrocinadorActive.descripcion : ''
  )
  console.log(patrocinadorActive)
  const handleContentChange = (value: string) => {
    setContent(value)
  }

  return (
    <AdminCard backBtn>
      <form className='px-5 pb-10' onSubmit={handleSubmit(onSubmit)}>
        <Input
          isRequired
          isInvalid={errors.nombre_patrocinador ? true : false}
          errorMessage={
            errors.nombre_patrocinador ? errors.nombre_patrocinador.message : ''
          }
          type='text'
          {...register('nombre_patrocinador')}
          label='Nombre del Patrocinador'
          defaultValue={patrocinadorActive?.nombre_patrocinador}
          className='m-2'
        />

        <ReactQuill
          className='h-[300px] py-10'
          theme='snow'
          value={content}
          onChange={handleContentChange}
        />

        <Input
          type='text'
          {...register('sitio_web')}
          label='Sitio Web'
          className='m-2'
          defaultValue={patrocinadorActive?.sitio_web}
        />

        <Input
          type='text'
          {...register('direccion')}
          label='Dirección'
          className='m-2'
          defaultValue={patrocinadorActive?.direccion}
        />

        <Input
          type='text'
          {...register('telefono')}
          label='Teléfono'
          className='m-2'
          defaultValue={patrocinadorActive?.telefono}
        />

        <input
          type='file'
          className='form-control py-10'
          {...register('imagen')}
          placeholder='Imagen'
        />
        <Image
          src={patrocinadorActive?.imagen}
          width={300}
          alt={patrocinadorActive?.nombre_patrocinador}
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

export default FormPatrocinadores
