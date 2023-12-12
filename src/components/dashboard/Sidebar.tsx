import { childOptions, options } from '@/constants/routes'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

interface SidebarProps {
  isSidebarOpen: boolean
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children, isSidebarOpen }) => {
  return (
    <>
      <aside
        id='logo-sidebar'
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-background border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700
        lg:w-72 `}
        aria-label='Sidebar'
      >
        <div className='px-2 pb-10'>
          <Link href='/admin/dashboard'>
            <Button variant='shadow' color='primary' className='w-full' size='lg' startContent={<FaHome />}>
              Dashboard
            </Button>
          </Link>
        </div>
        <Accordion variant='splitted'>
          {options.map((option, index) => (
            <AccordionItem
              isCompact={false}
              key={index}
              aria-label={option.name}
              title={
                <span className='text-sm flex align-middle content-center text-primary'>
                  <option.icon className='text-lg' /> <span className='ml-2'>{option.name}</span>
                </span>
              }
            >
              <div className='pb-3'>
                {childOptions
                  .filter((childOption) => childOption.id === option.id)
                  .map((route, index) => (
                    <Link
                      key={index}
                      href={route.path}
                      className='flex text-sm items-center p-2 text-gray-700 font-light rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                    >
                      <span className='ms-3'>- {route.name}</span>
                    </Link>
                  ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>

      <div className='lg:ml-72 md:ml-64 sm:ml-64 bg-default-100' style={{ minHeight: '94vh' }}>
        <div className='py-12 px-5 mt-14'>{children}</div>
      </div>
    </>
  )
}

export default Sidebar
