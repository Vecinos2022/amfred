const PropuestasValor = () => {
  return (
    <>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
              <img
                alt='Party'
                src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='lg:py-24'>
              <h2 className='text-3xl text-[#275DAA] font-bold sm:text-4xl'>
                PROPUESTAS DE VALOR
              </h2>

              <p className='mt-4 text-gray-600'>
                A través de planes de acción certificados promover el Bien
                Común, Calidad de vida, Preservación del entorno, Fomento de la
                Seguridad, Integridad, Transparencia en el uso de los recursos y
                Cultura Condominal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default PropuestasValor
;('')
