'use client'
import { childOptions, options } from '@/constants/routes_landing'
import ClockNavbar from '@/components/landing/ClockNavbar'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link as LinkUI,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useAuthBoundStore } from '@/store/auth/authSharedSlice'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LogoMain from '../shared/LogoMain'

const NavbarLanding = () => {
  const session = useSession()
  const router = useRouter()

  const { user } = useAuthBoundStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated
  }))

  const { setUser } = useAuthBoundStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdownActive, setDropdownActive] = useState(-1)

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/admin/dashboard')
      // signIn(undefined, { callbackUrl: '/admin/dashboard' })
      setUser(session.data?.user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const items = [
    {
      key: 'DGO',
      label: 'AMFRED DGO.'
    }
  ]
  return (
    <>
      <ClockNavbar />

      <Navbar
        maxWidth='full'
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className='flex py-2'
      >
        <NavbarContent className='sm:hidden' justify='start'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarContent>

        <NavbarContent className='sm:hidden pr-3' justify='center'>
          <NavbarBrand>
            <Link href={'/'}>
              <LogoMain />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {/* Logo full page start */}
        <NavbarContent
          className='hidden sm:inline-flex sm:w-20 gap-4'
          justify='start'
        >
          <NavbarBrand>
            <Link href={'/'}>
              <LogoMain />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* <NavbarContent className=''>
          <Dropdown>
            <DropdownTrigger>
              <Button variant='bordered'>Seleccionar AMFRED</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Dynamic Actions' items={items}>
              {(item) => (
                <DropdownItem
                  key={item.key}
                  color={'primary'}
                  className='text-[black]'
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent> */}

        {/* Menu y Button login at end */}
        <NavbarContent justify='end' className='hidden sm:flex sm:w-10 w-35'>
          {options.map((option, index) => (
            <NavbarMenuItem
              key={index}
              onMouseEnter={() => setDropdownActive(index)}
              onMouseLeave={() => setDropdownActive(-1)}
              onWheel={() => setDropdownActive(-1)}
            >
              {childOptions.some(
                (childOption) => childOption.id === option.id
              ) ? (
                <Dropdown isOpen={dropdownActive == index} key={option.id}>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className='p-0 bg-transparent data-[hover=true]:bg-transparent text-lg text-[#275DAA]'
                        variant='light'
                      >
                        {option.name}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <div
                    onMouseEnter={() => setDropdownActive(index)}
                    onMouseLeave={() => setDropdownActive(-1)}
                    onWheel={() => setDropdownActive(-1)}
                  >
                    {childOptions.some(
                      (childOption) => childOption.id === option.id
                    ) && (
                      <DropdownMenu
                        aria-label='ACME'
                        className='w-[340px]'
                        itemClasses={{
                          base: 'gap-0'
                        }}
                      >
                        {childOptions
                          .filter((childOption) => childOption.id === option.id)
                          .map((route, index) => (
                            <DropdownItem key={index}>
                              <Link
                                href={route.path}
                                className='text-md text-[#275DAA]'
                              >
                                {route.name}
                              </Link>
                            </DropdownItem>
                          ))}
                      </DropdownMenu>
                    )}
                  </div>
                </Dropdown>
              ) : (
                <Link
                  className='p-0 bg-transparent data-[hover=true]:bg-transparent text-md text-[#275DAA]'
                  href={`/${option.id}`}
                >
                  {option.name}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
          <NavbarItem>
            <Button
              as={Link}
              className='rounded bg-[#275DAA] text-[white]'
              href='/login'
              variant='flat'
            >
              {'Mi Cuenta'}
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Side menu */}
        <NavbarMenu>
          {options.map((option, index) => (
            <NavbarMenuItem key={index}>
              <LinkUI className='w-full' color='foreground' href='#' size='lg'>
                <Dropdown key={index}>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className='p-0 bg-transparent data-[hover=true]:bg-transparent text-xl text-[#275DAA]'
                        radius='sm'
                        variant='light'
                      >
                        {option.name}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    className='w-[340px]'
                    itemClasses={{
                      base: 'gap-4'
                    }}
                  >
                    {childOptions
                      .filter((childOption) => childOption.id === option.id)
                      .map((route, index) => (
                        <DropdownItem key={index}>
                          <Link
                            onClick={closeMenu}
                            href={route.path}
                            className='text-lg text-[#275DAA]'
                          >
                            {route.name}
                          </Link>
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </Dropdown>
              </LinkUI>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default NavbarLanding
