'use client'
import { usePatrocinadoresStore } from '@/store/patrocinadores/patrocinadoresSlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCalendar } from 'react-icons/fa'
import dayjs from '@/services/daysJsConfig'
import Image from 'next/image'
import { PatrocinadorResponse } from '@/types/Patrocinador'

const PatrocinadoresLanding = () => {
  const { getPatrocinadores, setActive } = usePatrocinadoresStore()

  useEffect(() => {
    getPatrocinadores()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { patrocinadores } = usePatrocinadoresStore((state) => ({
    patrocinadores: state.patrocinadores
  }))

  const handleViewNoticia = (patrocinador: PatrocinadorResponse) => {
    setActive(patrocinador)
  }

  return (
    <>
      <section className='p-10'>
        <div className='flex flex-row justify-center py-10'>
          <h1 className='text-xl md:text-4xl font-black'>Patrocinadores</h1>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {patrocinadores
            .filter((patrocinador) => patrocinador.estatus === true)
            .map((patrocinador, index) => (
              <Link
                href={'/patrocinador'}
                key={index}
                onClick={() => handleViewNoticia(patrocinador)}
              >
                <article className=' rounded-lg relative overflow-hidden mb-2 w-full'>
                  <span className='rounded-lg'>
                    <Image
                      width={500}
                      height={500}
                      alt={patrocinador.nombre_patrocinador}
                      src={patrocinador.imagen}
                      className='shadow-sm object-cover  h-40  rounded-lg transition duration-300 ease-in-out hover:scale-125'
                    />
                  </span>
                  <div className='bg-white p-4 sm:p-6'>
                    <h3 className='mt-0.5 text-lg text-gray-900 line-clamp-2'>
                      {patrocinador.nombre_patrocinador}
                    </h3>
                    <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                      {patrocinador.direccion}
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
export default PatrocinadoresLanding
