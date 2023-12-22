'use client'
import React from 'react'
import Link from 'next/link'
import { Accordion, AccordionItem } from '@nextui-org/react'

const Noticia = () => {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const options = {
    variants: {
      enter: {
        y: 0,
        opacity: 1,
        height: 'auto',
        transition: {
          height: {
            type: 'spring',
            stiffness: 500,
            damping: 30,
            duration: 1
          },
          opacity: {
            easings: 'ease',
            duration: 1
          }
        }
      },
      exit: {
        y: -10,
        opacity: 0,
        height: 0,
        transition: {
          height: {
            easings: 'ease',
            duration: 0.25
          },
          opacity: {
            easings: 'ease',
            duration: 0.3
          }
        }
      }
    }
  }
  return (
    <>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              alias doloribus impedit.
            </h2>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
              <img
                alt='Party'
                src='https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='lg:py-16'>
              <article className='space-y-4 text-gray-600'>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <Accordion motionProps={options} className='w-full'>
          <AccordionItem
            key='1'
            aria-label='Accordion 1'
            title='Accordion 1'
            className='w-ful'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key='2'
            aria-label='Accordion 2'
            title='Accordion 2'
            className='w-full'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key='3'
            aria-label='Accordion 3'
            title='Accordion 3'
            className='w-full'
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section>
    </>
  )
}
export default Noticia
