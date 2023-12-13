const HeroLanding = () => {
  return (
    <section className='bg-gray-50'>
      <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
        <div className='mx-auto max-w-xl text-center'>
          <div className='flex justify-center p-5 mb-5'>
            <section className='bg-gray-50'>
              <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
                <div className='mx-auto max-w-xl text-center'>
                  <h1 className='text-3xl font-extrabold sm:text-5xl'>
                    AMFRED A.C.
                    <strong className='font-extrabold text-[#275DAA] sm:block'>
                      {' '}
                      Increase Conversion.{' '}
                    </strong>
                  </h1>

                  <p className='mt-4 sm:text-xl/relaxed'>
                    Es una organización sin fines de lucro cuyo objetivo
                    primordial es generar estándares de Gobernanza Condominal
                    para presentar un frente unido en problemas comunes de la
                    sociedad.
                  </p>

                  <div className='mt-8 flex flex-wrap justify-center gap-4'>
                    <a
                      className='block w-full rounded bg-[#275DAA] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
                      href='/get-started'
                    >
                      Registrate
                    </a>

                    <a
                      className='block w-full rounded px-12 py-3 text-sm font-medium text-[#275DAA] shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
                      href='/about'
                    >
                      Sobre Nosotros
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='mt-8 flex flex-wrap justify-center gap-4'></div>
        </div>
      </div>
    </section>
  )
}

export default HeroLanding
;('')
