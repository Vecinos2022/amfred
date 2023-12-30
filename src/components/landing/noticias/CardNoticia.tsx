import Link from 'next/link'
import { NoticiaResponse } from '@/types/Noticia'
import { Image } from '@nextui-org/react'
import dayjs from '@/services/daysJsConfig'

const CardNoticia: React.FC<NoticiaResponse> = ({
  titulo,
  descripcion,
  descripcion_corta,
  updatedAt,
  _id,
  imagen
}) => {
  console.log(imagen)
  return (
    <article className='col-span-4 flex items-center sm:col-span-2 lg:col-span-1'>
      <div className='flex flex-col items-start '>
        <Link href={'/noticia'} className='hover:scale-95'>
          <Image
            src={imagen}
            className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56'
          />
          <p
            className='bg-[#275DAA] flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
    rounded-full uppercase '
          >
            {dayjs(updatedAt).format('DD/MM/YYYY')}
          </p>
          <a className='text-lg font-bold sm:text-xl md:text-2xl'>{titulo}</a>
          <p className='text-sm text-black '>{descripcion_corta}</p>
        </Link>
      </div>
    </article>
  )
}

export default CardNoticia
