import Link from 'next/link'
import { NoticiaResponse } from '@/types/Noticia'
import { Image } from '@nextui-org/react'
import dayjs from '@/services/daysJsConfig'
import { useRouter } from 'next/navigation'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'

interface NoticiaProps {
  noticia: NoticiaResponse
}

const CardNoticia: React.FC<NoticiaProps> = ({ noticia }) => {
  const route = useRouter()

  const { setActive } = useNoticiasStore()

  const handleViewNoticia = (noticia: NoticiaResponse) => {
    setActive(noticia)
  }
  return (
    <Link href='noticia' onClick={() => handleViewNoticia(noticia)}>
      <article className='col-span-4 flex items-center sm:col-span-2 lg:col-span-1 cursor-pointer' onClick={() => handleViewNoticia(noticia)}>
        <div className='flex flex-col items-start hover:scale-95'>
          <Image alt={noticia.titulo} src={noticia.imagen} className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56' />
          <p
            className='bg-[#275DAA] flex items-center leading-none text-xs text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
    rounded-full uppercase mb-2'
          >
            {dayjs(noticia.updatedAt).format('LL')}
          </p>
          <a className='text-lg font-bold sm:text-xl md:text-2xl'>{noticia.titulo}</a>
          <p className='text-sm text-black '>{noticia.descripcion_corta}</p>
        </div>
      </article>
    </Link>
  )
}

export default CardNoticia
