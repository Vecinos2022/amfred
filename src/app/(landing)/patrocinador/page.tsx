'use client'

import React from 'react'
import parse from 'html-react-parser'
import { useRouter } from 'next/navigation'
import dayjs from '@/services/daysJsConfig'

import './../../../styles/styles-quill.css'
import { usePatrocinadoresStore } from '@/store/patrocinadores/patrocinadoresSlice'
import Image from 'next/image'

const Patrocinador = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = typeof window !== 'undefined' ? useRouter() : null

  const { patrocinadorActive } = usePatrocinadoresStore((state) => ({
    patrocinadorActive: state.patrocinadorActive
  }))
  if (patrocinadorActive) {
    return (
      <>
        <section>
          <div className='  py-16 px-6 md:px-32 sm:py-24 '>
            <div className='max-w-3xl'>
              <h2 className='text-3xl font-bold sm:text-4xl text-[#275DAA]'>
                {patrocinadorActive.nombre_patrocinador}
              </h2>
              <p className='mt-3 mb-5'>
                {dayjs(patrocinadorActive.updatedAt).format('DD/MM/YYYY')}
              </p>
              <p className='text-lg'>{patrocinadorActive.direccion}</p>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-8'>
              <div className='relative  overflow-hidden  w-full'>
                <Image
                  width={3000}
                  height={1000}
                  alt={patrocinadorActive.nombre_patrocinador}
                  src={patrocinadorActive.imagen}
                  className=' object-cover h-96'
                />
              </div>

              <div className='lg:py-5'>
                <article className='space-y-4 text-gray-600'>
                  <div className='quill'>
                    {parse(patrocinadorActive.descripcion)}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    router?.push('/')
  }
}
export default Patrocinador
