import Link from 'next/link'

const TodasNoticias = () => {
  return (
    <>
      <section className='p-10'>
        <Link
          href={'/noticias'}
          className='font-bold hover:text-[#275DAA] text-sm md:text-lg'
        >
          Regresar
        </Link>
        <div className='flex flex-row justify-between py-10'>
          <h1 className='text-xl md:text-4xl font-black'>Todas las Noticias</h1>
          <button>Filtrar por</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
          <div>
            <Link href={'/noticia'}>
              <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
                <img
                  alt='Office'
                  src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  className='h-56 w-full object-cover'
                />
                <div className='bg-white p-4 sm:p-6'>
                  {' '}
                  10th Oct 2022{' '}
                  <a href='#'>
                    <h3 className='mt-0.5 text-lg text-gray-900'>
                      How to position your furniture for positivity
                    </h3>
                  </a>
                  <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default TodasNoticias
