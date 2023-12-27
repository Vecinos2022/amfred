import { childOptions, options } from '@/constants/routes_admin'
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
        <div className='px-2  mt-5'>
          <Link href='/admin/dashboard'>
            <Button
              variant='shadow'
              color='primary'
              className='w-full'
              size='lg'
              startContent={<FaHome />}
            >
              Dashboard
            </Button>
          </Link>
        </div>

        <ul className='mt-6 space-y-1'>
          {options.map((option, index) => (
            <li key={index}>
              <Link
                href={option.path}
                className='block rounded-lg px-4 py-2 text-md text-center font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              >
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div
        className='lg:ml-72 md:ml-64 sm:ml-64 bg-default-100'
        style={{ minHeight: '94vh' }}
      >
        <div className='py-12 px-5 mt-14'>{children}</div>
      </div>
    </>
  )
}

export default Sidebar
