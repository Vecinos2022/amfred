'use client'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { IoClose, IoLogOut } from 'react-icons/io5'
import { TfiMenu } from 'react-icons/tfi'

import { useAuthBoundStore } from '@/store/auth/authSharedSlice'
import Link from 'next/link'
import LoaderScreen from '../shared/LoaderScreen'
import LogoMain from '../shared/LogoMain'
import Sidebar from './Sidebar'

interface NavbarDashboardProps {
  children: React.ReactNode
}

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({ children }) => {
  const session = useSession()

  const router = useRouter()

  const { user } = useAuthBoundStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated
  }))

  const { setUser } = useAuthBoundStore()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState)
  }

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' })
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      setUser(session.data?.user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return (
    <>
      {session.status === 'loading' ? (
        <LoaderScreen />
      ) : (
        // session.status === 'authenticated' && (
        <>
          <nav className='fixed top-0 z-50 w-full bg-background border-solid border-gray-300 border-b-1 dark:bg-gray-800 dark:border-gray-700 px-12'>
            <div className='px-3 py-3 lg:px-5 lg:pl-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start rtl:justify-end'>
                  <button
                    onClick={toggleSidebar}
                    className='inline-flex items-center p-2 text-background rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                  >
                    <span className='sr-only'>Open sidebar</span>
                    <span className='text-foreground p-1'>
                      {isSidebarOpen ? <IoClose /> : <TfiMenu />}
                    </span>
                  </button>

                  <LogoMain />
                </div>
                <div className='flex items-center'>
                  <div className='flex items-center ms-3'>
                    <Dropdown backdrop='blur'>
                      <DropdownTrigger>
                        <Button variant='solid' color='primary'>
                          {'Admin'} <FaChevronDown />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        variant='shadow'
                        aria-label='Static Actions'
                      >
                        <DropdownItem
                          key='delete'
                          startContent={<IoLogOut />}
                          className='text-danger'
                          color='danger'
                          onClick={() => handleLogout()}
                        >
                          Cerrar sesión
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Sidebar isSidebarOpen={isSidebarOpen}>{children}</Sidebar>
        </>
        // )
      )}
    </>
  )
}

export default NavbarDashboard
