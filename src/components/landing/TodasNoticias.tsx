'use client'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'
import { NoticiaResponse } from '@/types/Noticia'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCalendar } from 'react-icons/fa'
import CardNoticia from './noticias/CardNoticia'
import dayjs from '@/services/daysJsConfig'

const TodasNoticias = () => {
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
          <h1 className='text-xl md:text-4xl font-black'>Todas las Noticias</h1>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {noticias
            .filter((noticia) => noticia.estatus === true)
            .map((noticia, index) => (
              <Link
                href={'/noticia'}
                key={index}
                onClick={() => handleViewNoticia(noticia)}
              >
                <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                  <Image
                    alt={noticia.titulo}
                    src={noticia.imagen}
                    className='h-56 w-full object-cover'
                  />
                  <div className='bg-white p-4 sm:p-6'>
                    {' '}
                    {dayjs(noticia.updatedAt).format('LL')}{' '}
                    <h3 className='mt-0.5 text-lg text-gray-900'>
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
