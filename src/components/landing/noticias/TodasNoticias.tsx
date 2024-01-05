'use client'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'
import { NoticiaResponse } from '@/types/Noticia'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCalendar } from 'react-icons/fa'
import CardNoticia from './CardNoticia'
import dayjs from '@/services/daysJsConfig'
import Image from 'next/image'

interface noticiasSimilares {
  titulo_seccion: string
}

const TodasNoticias: React.FC<noticiasSimilares> = ({ titulo_seccion }) => {
  const { getNoticias, setActive } = useNoticiasStore()

  useEffect(() => {
    getNoticias()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { noticias } = useNoticiasStore((state) => ({
    noticias: state.noticias
  }))

  const handleViewNoticia = (noticia: NoticiaResponse) => {
    setActive(noticia)
  }

  return (
    <>
      <section className='p-10'>
        <div className='flex flex-row justify-between py-10'>
          <h1 className='text-xl md:text-4xl font-black'>{titulo_seccion}</h1>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {noticias
            .filter((noticia) => noticia.estatus === true)
            .map((noticia, index) => (
              <Link
                href={'/noticia'}
                key={index}
                onClick={() => handleViewNoticia(noticia)}
              >
                <article className=' rounded-lg relative overflow-hidden mb-2 w-full'>
                  <span className='rounded-lg'>
                    <Image
                      width={500}
                      height={500}
                      alt={noticia.titulo}
                      src={noticia.imagen}
                      className='shadow-sm object-cover  h-40  rounded-lg transition duration-300 ease-in-out hover:scale-125'
                    />
                  </span>
                  <div className='bg-white p-4 sm:p-6'>
                    {' '}
                    {dayjs(noticia.updatedAt).format('LL')}{' '}
                    <h3 className='mt-0.5 text-lg text-gray-900 line-clamp-2'>
                      {noticia.titulo}
                    </h3>
                    <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                      {noticia.descripcion_corta}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
        </section>
      </section>
    </>
  )
}
export default TodasNoticias
