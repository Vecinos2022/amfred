import { Image } from '@nextui-org/react'
import img_torre from '../../assets/imgs/TORREV1_1.png'

const HeroLanding = () => {
  return (
    <>
      <section className='relative bg-[url(/img/banner_amfred.jpg)] bg-cover bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
            <h1 className='text-3xl  font-extrabold sm:text-5xl sm:text-[white]'>
              AMFRED A.C.
              <strong className='block font-extrabold text-rose-700'> </strong>
            </h1>

            <p className='mt-4 max-w-lg sm:text-xl/relaxed sm:text-[white]'>
              Organización sin fines de lucro cuyo objetivo primordial es
              generar estándares de Gobernanza Condominal
            </p>

            <div className='mt-8 flex flex-wrap gap-4 text-center'>
              <a
                href='#'
                className='block w-full rounded bg-[#275DAA] px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'
              >
                Registrarte
              </a>

              <a
                href='#'
                className='block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#275DAA] shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
              >
                Sobre Nosotros
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.399794762097!2d-104.68372707387482!3d24.016963028489165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc813585b3e7f%3A0x88bde738d74c2383!2sTORRE%20V1!5e0!3m2!1ses-419!2smx!4v1702677241887!5m2!1ses-419!2smx'
                width='600'
                height='450'
                loading='lazy'
              ></iframe>
            </div>

            <div>
              <div className='my-5'>
                <Image alt='Torre V1 pasillo' src={img_torre.src} />
              </div>
              <h2 className='text-3xl font-bold sm:text-4xl'>
                Nuestras Oficinas
              </h2>

              <p className='mt-4 text-gray-600 text-xl'>
                Ubicación de nuestras oficinas: Piso 7 de la Avenida Universidad
                LB, Lomas del Guadiana, 34138 Durango, Dgo
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroLanding
;('')
