import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button
} from '@nextui-org/react'

const TodasNoticias = () => {
  /* Traer datos de back para mostrar */

  return (
    <>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
        <div className='rounded-lg bg-gray-200'>
          <Card
            isFooterBlurred
            isPressable
            className='w-full h-[300px] col-span-12 sm:col-span-7'
          >
            <CardHeader className='absolute z-10 top-1 flex-col items-start'>
              <h4 className='text-black/90 font-medium text-xl'>
                Info titulo de noticia
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Relaxing app background'
              className='z-0 w-full h-full object-cover'
              src='/images/card-example-5.jpeg'
            />
            <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
              <div className='flex flex-grow gap-2 items-center'>
                <div className='flex flex-col'>
                  <p className='text-tiny text-white/60'>
                    ¿Quieres mostrar la noticia?
                  </p>
                </div>
              </div>
              <Button radius='full' size='sm'>
                Mostrar/Ocultar
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className='rounded-lg bg-gray-200'>
          <Card
            isFooterBlurred
            isPressable
            className='w-full h-[300px] col-span-12 sm:col-span-7'
          >
            <CardHeader className='absolute z-10 top-1 flex-col items-start'>
              <h4 className='text-black/90 font-medium text-xl'>
                Info titulo de noticia
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Relaxing app background'
              className='z-0 w-full h-full object-cover'
              src='/images/card-example-5.jpeg'
            />
            <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
              <div className='flex flex-grow gap-2 items-center'>
                <div className='flex flex-col'>
                  <p className='text-tiny text-white/60'>
                    ¿Quieres mostrar la noticia?
                  </p>
                </div>
              </div>
              <Button radius='full' size='sm'>
                Mostrar/Ocultar
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
        <div className='h-32 rounded-lg bg-gray-200'></div>
      </div>
    </>
  )
}

export default TodasNoticias
;('')
