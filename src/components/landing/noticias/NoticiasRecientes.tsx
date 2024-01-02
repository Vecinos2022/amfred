import React, { useEffect } from 'react'
import CardNoticia from './CardNoticia'
import { Image } from '@nextui-org/react'
import dayjs from '@/services/daysJsConfig'
import { NoticiaResponse } from '@/types/Noticia'
import { useNoticiasStore } from '@/store/noticias/noticiasSlice'

import { useRouter } from 'next/navigation'
import LoaderScreen from '@/components/shared/LoaderScreen'
import Link from 'next/link'
import { FaCalendar } from 'react-icons/fa'

const NoticiasRecientes = () => {
  const route = useRouter()

  const { getNoticias, setActive } = useNoticiasStore()

  useEffect(() => {
    getNoticias()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { noticias, isLoading } = useNoticiasStore((state) => ({
    noticias: state.noticias,
    isLoading: state.isLoading
  }))

  const setNoticiaActive = (noticia: NoticiaResponse) => {
    setActive(noticia)
  }

  return isLoading ? (
    <LoaderScreen />
  ) : (
    <section className='p-4 lg:p-20'>
      <div className='flex flex-row justify-between py-5'>
        <h1 className='text-xl md:text-4xl font-black'>ÚLTIMAS NOTICIAS</h1>
        <Link
          href={'/todas_noticias'}
          className='font-bold hover:text-[#275DAA] text-sm md:text-lg'
        >
          MOSTRAR TODAS
        </Link>
      </div>

      <section className='grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-6 flow-row-dense'>
        {noticias
          .filter((noticia) => noticia.estatus === true)
          .map((noticia, index) =>
            index == 0 ? (
              <article
                key={index}
                className='col-span-4 lg:col-span-2 md:row-span-2 cursor-pointer'
              >
                <Link
                  href='noticia'
                  key={index}
                  onClick={() => setNoticiaActive(noticia)}
                >
                  <div className='flex flex-col items-start'>
                    <div className='flex flex-col  sm:px-5 '>
                      <div className='w-full'>
                        <div className='block'>
                          <Image
                            isZoomed
                            alt={noticia.titulo}
                            src={noticia.imagen}
                            className='object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full  transition duration-300 ease-in-out'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-2 pl-0  '>
                        <div
                          className='flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                md:space-y-5'
                        >
                          <div
                            className='bg-[#275DAA] flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                  uppercase '
                          >
                            <p className='inline text-xs font-medium'>New</p>
                          </div>
                          <h1 className='text-4xl font-bold leading-none lg:text-5xl xl:text-6xl'>
                            {noticia.titulo}
                          </h1>
                          <div className='pt-2 pr-0 pb-0 pl-0'>
                            <p className='flex items-center text-sm font-medium mt-0 mr-1 mb-0 ml-1'>
                              <FaCalendar className='mr-2 text-lg text-[#275DAA]' />{' '}
                              {dayjs(noticia.updatedAt).format('LL')}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className='py-4 items-self-left'>
                          {noticia.descripcion_corta}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ) : (
              <div
                key={index}
                className='col-span-4 flex items-start sm:col-span-2 lg:col-span-1 cursor-pointer'
              >
                <CardNoticia noticia={noticia} />
              </div>
            )
          )}
      </section>
    </section>
  )
}

export default NoticiasRecientes
