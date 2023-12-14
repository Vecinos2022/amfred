'use client'

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
import { useSession } from 'next-auth/react'
import LogoMain from '../shared/LogoMain'

const NavbarLanding = () => {
  const session = useSession()

  const { user } = useAuthBoundStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated
  }))

  const { setUser } = useAuthBoundStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      'section': 'Nosotros',
      'isOpen': false,
      'subsections': [
        'Mision y vision',
        'Propuestas de valor',
        'Nuestras oficinas'
      ]
    },
    {
      'section': 'Beneficios',
      'isOpen': false,
      'subsections': [
        'Convenios de colaboración',
        'Educación',
        'Networking',
        'Actualizaciones',
        'Integración'
      ]
    },
    {
      'section': 'Convenios',
      'isOpen': false,
      'subsections': ['Proximamente']
    },
    {
      'section': 'Afiliate',
      'isOpen': false,
      'subsections': ['Formato de afiliación', 'Código de etica']
    },
    {
      'section': 'Noticias',
      'isOpen': false,
      'subsections': []
    }
  ]

  useEffect(() => {
    if (session.status === 'authenticated') {
      setUser(session.data?.user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <LogoMain />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='start'>
        <NavbarBrand>
          <LogoMain />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {menuItems.map((item, index) =>
          item.subsections.length >= 1 ? (
            <Dropdown key={index}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className='p-0 bg-transparent data-[hover=true]:bg-transparent text-xl text-[#275DAA]'
                    radius='sm'
                    variant='light'
                  >
                    {item.section}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={item.section}
                className='w-[340px]'
                itemClasses={{
                  base: 'gap-4'
                }}
              >
                {item.subsections.map((subsection, subIndex) => (
                  <DropdownItem className='text-black' key={subIndex}>
                    <Link href='#' className='text-lg text-[#275DAA]'>
                      {subsection}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link
              key='noticias-link'
              href='#'
              className='text-xl text-[#275DAA]'
            >
              {item.section}
            </Link>
          )
        )}
      </NavbarContent>

      <NavbarContent justify='end' className='hidden md:flex'>
        <NavbarItem>
          <Button
            as={Link}
            className='rounded bg-[#275DAA] text-[white]'
            href='/login'
            variant='flat'
          >
            {user ? user.nombre : 'Mi Cuenta'}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) =>
          item.subsections.length >= 1 ? (
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
                        {item.section}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label='ACME '
                    className='w-[340px]'
                    itemClasses={{
                      base: 'gap-4'
                    }}
                  >
                    {item.subsections.map((subsection, subIndex) => (
                      <DropdownItem key='autoscaling'>
                        <Link href='#' className='text-lg text-[#275DAA]'>
                          {subsection}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </LinkUI>
            </NavbarMenuItem>
          ) : (
            <Link
              key='noticias-link-top'
              href='#'
              className='text-[#275DAA] text-xl'
            >
              {item.section}
            </Link>
          )
        )}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarLanding
