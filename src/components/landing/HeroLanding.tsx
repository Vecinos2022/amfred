const HeroLanding = () => {
  return (
    <section className='relative bg-[url(/img/banner-1.png)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
          <h1 className='text-3xl  font-extrabold sm:text-5xl sm:text-[white]'>
            AMFRED A.C.
            <strong className='block font-extrabold text-rose-700'> </strong>
          </h1>

          <p className='mt-4 max-w-lg sm:text-xl/relaxed sm:text-[white]'>
            Organización sin fines de lucro cuyo objetivo primordial es generar
            estándares de Gobernanza Condominal
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
  )
}

export default HeroLanding
;('')
