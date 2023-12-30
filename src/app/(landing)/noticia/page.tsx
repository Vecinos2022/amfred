'use client'
import React from 'react'
import Link from 'next/link'
import { Image } from '@nextui-org/react'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'
import { useRouter } from 'next/navigation'
import dayjs from '@/services/daysJsConfig'
import parse from 'html-react-parser'
import './../../../styles/styles-quill.css'

const Noticia = () => {
  const route = useRouter()

  const { noticiaActive } = useNoticiasStore((state) => ({
    noticiaActive: state.noticiaActive
  }))
  if (noticiaActive) {
    return (
      <>
        <section>
          <div className='  py-16 px-6 md:px-32 sm:py-24 '>
            <div className='pb-10'>
              <Link
                href={'/todas_noticias'}
                className='text-xl font-black hover:text-[rgb(39,93,170)]'
              >
                Todas las noticias
              </Link>
            </div>
            <div className='max-w-3xl'>
              <h2 className='text-3xl font-bold sm:text-4xl text-[#275DAA]'>
                {noticiaActive.titulo}
              </h2>
              <p className='mt-3 mb-5'>
                {dayjs(noticiaActive.updatedAt).format('DD/MM/YYYY')}
              </p>
              <p className='text-lg'>{noticiaActive.descripcion_corta}</p>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-8'>
              <div className='relative  overflow-hidden sm:h-80 lg:h-full'>
                <Image
                  alt={noticiaActive.imagen}
                  src={noticiaActive.imagen}
                  className=' object-cover'
                />
              </div>

              <div className='lg:py-5'>
                <article className='space-y-4 text-gray-600'>
                  <div className='quill'>
                    {parse(noticiaActive.descripcion)}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    route.push('/')
  }
}
export default Noticia
