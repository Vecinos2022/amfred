import Link from 'next/link'

const Noticias = () => {
  return (
    <>
      <section className='p-20'>
        <div className='flex flex-row justify-between py-5'>
          <h1 className='text-xl md:text-4xl font-black'>ÚLTIMAS NOTICIAS</h1>
          <Link
            href={'/todas_noticias'}
            className='font-bold hover:text-[#275DAA] text-sm md:text-lg'
          >
            MOSTRAR TODAS
          </Link>
        </div>
        <div className='grid grid-cols-1 grid-rows-4  md:grid-cols-4 md:grid-rows-2 gap-4'>
          <div className='md:col-span-2 md:row-span-2'>
            <Link href={'/noticia'}>
              <div className='flex flex-col items-center sm:px-5 '>
                <div className='flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 '>
                  <div
                    className='flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
              md:space-y-5'
                  >
                    <div
                      className='bg-[#275DAA] flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                uppercase '
                    >
                      <p className='inline'>
                        <svg
                          className='w-3.5 h-3.5 mr-1'
                          fill='currentColor'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                    00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                    1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                    0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                          />
                        </svg>
                      </p>
                      <p className='inline text-xs font-medium'>New</p>
                    </div>
                    <a className='text-4xl font-bold leading-none lg:text-5xl xl:text-6xl'>
                      Write anything. Be creative.
                    </a>
                    <div className='pt-2 pr-0 pb-0 pl-0'>
                      <p className='text-sm font-medium inline'>author:</p>
                      <a className='inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline'>
                        Jack Sparrow
                      </a>
                      <p className='inline text-sm font-medium mt-0 mr-1 mb-0 ml-1'>
                        · 23rd, April 2021 ·
                      </p>
                      <p className='text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1'>
                        1hr 20min. read
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className='py-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores qui excepturi cum inventore nemo officiis earum esse
                    id provident tempora optio minus pariatur iure dignissimos,
                    repudiandae praesentium quam veritatis unde!
                  </p>
                </div>
                <div className='w-full'>
                  <div className='block'>
                    <img
                      src='https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
                      className='object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full hover:scale-95 transition duration-300 ease-in-out'
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='md:col-start-3 '>
            <div className='flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
              <Link href={'/noticia'} className='hover:scale-95'>
                <img
                  src='https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
                  className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56'
                />
                <p
                  className='bg-[#275DAA] flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase '
                >
                  Entertainment
                </p>
                <a className='text-lg font-bold sm:text-xl md:text-2xl'>
                  Improving your day to the MAX
                </a>
                <p className='text-sm text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className='pt-2 pr-0 pb-0 pl-0'>
                  <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
                    Jack Sparrow
                  </a>
                  <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
                    · 23rd, March 2021 ·
                  </p>
                  <p className='inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1'>
                    1hr 20min. read
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='md:col-start-4 '>
            <div className='flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
              <Link href={'/noticia'} className='hover:scale-95'>
                <img
                  src='https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
                  className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-'
                />
                <p
                  className='bg-[#275DAA] flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase '
                >
                  Entertainment
                </p>
                <a className='text-lg font-bold sm:text-xl md:text-2xl'>
                  Improving your day to the MAX
                </a>
                <p className='text-sm text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className='pt-2 pr-0 pb-0 pl-0'>
                  <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
                    Jack Sparrow
                  </a>
                  <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
                    · 23rd, March 2021 ·
                  </p>
                  <p className='inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1'>
                    1hr 20min. read
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='md:col-start-3 md:row-start-2 '>
            <div className='flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
              <Link href={'/noticia'} className='hover:scale-95'>
                <img
                  src='https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
                  className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-'
                />
                <p
                  className='bg-[#275DAA] flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase '
                >
                  Entertainment
                </p>
                <a className='text-lg font-bold sm:text-xl md:text-2xl'>
                  Improving your day to the MAX
                </a>
                <p className='text-sm text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className='pt-2 pr-0 pb-0 pl-0'>
                  <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
                    Jack Sparrow
                  </a>
                  <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
                    · 23rd, March 2021 ·
                  </p>
                  <p className='inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1'>
                    1hr 20min. read
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='md:col-start-4 md:row-start-2 '>
            <div className='flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
              <Link href={'/noticia'} className='hover:scale-95'>
                <img
                  src='https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
                  className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-'
                />
                <p
                  className='bg-[#275DAA] flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase '
                >
                  Entertainment
                </p>
                <a className='text-lg font-bold sm:text-xl md:text-2xl'>
                  Improving your day to the MAX
                </a>
                <p className='text-sm text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className='pt-2 pr-0 pb-0 pl-0'>
                  <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
                    Jack Sparrow
                  </a>
                  <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
                    · 23rd, March 2021 ·
                  </p>
                  <p className='inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1'>
                    1hr 20min. read
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Noticias
;('')
